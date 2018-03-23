import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Observable<Book[]>;

  constructor(
      private bookService: BookService,
      private cartService: CartService,
      private route: ActivatedRoute,
  ) {}

  ngOnInit() {
        this.getBook();
  }

  public getBook(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.bookService.getBook(id)
            .subscribe(
                book => {
                    this.book = book.json();
                });
  }

  onAddToCart(item) {
        this.cartService.addProductToCart(item);
  }
}
