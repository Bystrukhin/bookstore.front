import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() orders: Order[];

  constructor(
      private cartService: CartService,
  ) { }

  ngOnInit() {
      this.getAllOrders();
  }

  getAllOrders(): void {
      this.cartService.getOrders()
          .subscribe(
              orders => {
                  this.orders = orders.json();
              });
  }

}
