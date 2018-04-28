import {Component, Input, OnInit} from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { OrderDetails } from '../../../models/order-details';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

    @Input() order: any;

    constructor(
        private cartService: CartService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getOrderDetails();
    }

    getOrderDetails(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.cartService.getOrderDetails(id)
            .subscribe(
                order => {
                    this.order = order.json();
                });
    }

}
