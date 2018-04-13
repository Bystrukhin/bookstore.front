import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(
      private cartService: CartService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
  ) { }

  ngOnInit() {
      this.getOrders();
  }

    getOrders(): void {
        const userId = +this.route.snapshot.paramMap.get('userId');
        this.cartService.getUserOrders(userId)
            .subscribe(
                orders => {
                    this.orders = orders.json();
                });
    }

}
