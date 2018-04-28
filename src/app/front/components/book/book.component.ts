import {Component, Input, OnInit} from '@angular/core';
import { Book } from '../../../models/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: any;
  constructor(
      private cartService: CartService,
      private route: ActivatedRoute,
      private location: Location
  ) {
      const url: string = route.snapshot.url.join('');
  }

  ngOnInit() {
  }

    onAddToCart(item) {
        this.cartService.addProductToCart(item);
    }

}
