import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingCartState } from '../front/components/shopping-cart/shopping-cart.state';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Book } from '../models/book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CartService {
    products: any[] = [];
    cartTotal = 0;
    totalQuantity = 0;

    private cartSubject = new BehaviorSubject<ShoppingCartState>(<ShoppingCartState>{ products: this.products, cartTotal: this.cartTotal });
    cartState = this.cartSubject.asObservable();

    constructor(private http: Http) {}

    addProductToCart(product) {
        let exists = false;
        const parsedPrice = parseFloat(product.price);

        if (sessionStorage['cart']) {
            let cart = JSON.parse(sessionStorage.getItem('cart'));
            this.products.length = 0;
            this.cartTotal = 0;
            this.cartTotal = cart.cartTotal;
            cart.products.map(_product => {
                this.products.push(_product);
            });
            this.products = this.products.map(_product => {
                if (_product.product.book_id === product.book_id) {
                    _product.quantity++;
                    exists = true;
                }
                return _product;
            });
            if (!exists) {
                console.log('cart exists but product is new');
                product.parsedPrice = parsedPrice;
                this.products.push({
                    product: product,
                    quantity: 1
                });
            }
        } else if (!exists && !sessionStorage['cart']) {
            product.parsedPrice = parsedPrice;
            this.products.push({
                product: product,
                quantity: 1
            });
        }
        this.totalQuantity = JSON.parse(sessionStorage.getItem('productsQuantity'));
        this.totalQuantity++;
        sessionStorage.setItem('productsQuantity', JSON.stringify(this.totalQuantity));
        this.cartTotal += parsedPrice;
        this.cartSubject.next(<ShoppingCartState>{ products: this.products, cartTotal: this.cartTotal });
        sessionStorage.setItem('cart', JSON.stringify({ products: this.products, cartTotal: this.cartTotal }));
    }

    deleteProductFromCart(product) {
            console.log(product);
            let cart = JSON.parse(sessionStorage.getItem('cart'));
            this.products.length = 0;
            this.cartTotal = 0;
            cart.products.map(_product => {
                this.products.push(_product);
            });
            this.cartTotal = cart.cartTotal;
        this.products = this.products.filter(_product => {
            if (_product.product.book_id === product.book_id) {
                this.cartTotal -= _product.product.parsedPrice * _product.quantity;
                this.totalQuantity = JSON.parse(sessionStorage.getItem('productsQuantity'));
                if (this.totalQuantity > 0) {
                    this.totalQuantity -= _product.quantity;
                    sessionStorage.setItem('productsQuantity', JSON.stringify(this.totalQuantity));
                }
                return false;
            }
            return true;
        });
        this.cartSubject.next(<ShoppingCartState>{ products: this.products, cartTotal: this.cartTotal });
        sessionStorage.setItem('cart', JSON.stringify({ products: this.products, cartTotal: this.cartTotal }));
    }

    flushCart() {
        this.products = [];
        this.cartTotal = 0;
        this.cartSubject.next(<ShoppingCartState>{ products: this.products, cartTotal: this.cartTotal });
    }

    getOrders(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost/bookstore.back/public/index.php/api/orders', options);
    }

    getOrderDetails(id): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost/bookstore.back/public/index.php/api/orders/' + id, options);
    }

    getUserOrders(id): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost/bookstore.back/public/index.php/api/orders/user' + id, options);
    }
}
