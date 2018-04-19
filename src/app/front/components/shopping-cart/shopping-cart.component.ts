import {ChangeDetectionStrategy, TemplateRef, Component, OnDestroy, OnInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PaymentService } from '../../../services/payment.service';
import { Subscription } from 'rxjs/Subscription';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

declare var jquery: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
    orderForm: FormGroup;
    modalRef: BsModalRef;
    message: string;
    products: any[] = [];
    numProducts: number = 0;
    expandedHeight: string;
    cartTotal: number = 0;
    currentUser = [];
    user_id;

    private subscription: Subscription;

    changeDetectorRef: ChangeDetectorRef;

    constructor(private cartService: CartService,
                changeDetectorRef: ChangeDetectorRef,
                private paymentService: PaymentService,
                private modalService: BsModalService,
                private authService: AuthService,
                fb: FormBuilder
    ) {
        if (this.authService.getUser()) {
            this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            for (let item of this.currentUser) {
                this.user_id = item.user_id;
            }
            console.log(this.user_id);
        }
        this.changeDetectorRef = changeDetectorRef;
        this.orderForm = fb.group({
            'user_id': new FormControl(this.user_id),
            'firstName': [null, Validators.required],
            'secondName': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
            'phoneNumber': [null, Validators.required],
            'address': '',
            'city': '',
            'postalCode': '',
            'country': ''
    });
    }

    ngOnInit() {
        this.expandedHeight = '0';
        this.subscription = this.cartService.cartState.subscribe(data => {
            if (sessionStorage['cart']) {
                const cart = JSON.parse(sessionStorage.getItem('cart'));
                this.products = cart.products;
                this.cartTotal = cart.cartTotal;
                this.numProducts = cart.products.reduce((acc, product) => {
                    acc += product.quantity;
                    return acc;
                }, 0);
                this.changeDetectorRef.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    }

    decline(): void {
        this.message = 'Declined!';
        this.modalRef.hide();
    }

    deleteProduct(product) {
        this.cartService.deleteProductFromCart(product);
        window.location.reload();
    }

    openCheckout(products, orderForm) {
        this.modalRef.hide();
        sessionStorage.setItem('form', JSON.stringify(orderForm));
        console.log(sessionStorage.getItem('form'));
        const handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_key',
            locale: 'auto',
            token: function (token) {
                $.ajax({
                    url: 'http://www.back-archive.biz.ua/public/index.php/api/checkout',
                    type: 'post',
                    data: {token: token.id, email: token.email, products: JSON.stringify(products), form: JSON.stringify(orderForm)},
                    success: function(data) {
                        sessionStorage.removeItem('cart');
                        sessionStorage.removeItem('form');
                        sessionStorage.removeItem('productsQuantity');
                        window.location.reload();
                        console.log('Card successfully charged!');
                    },
                    error: function(data) {
                        console.log('Ajax Error!');
                    }
                });            }
        });

        handler.open({
            name: 'Archive',
            amount: this.cartTotal * 100
        });
    }
}
