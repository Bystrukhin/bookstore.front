import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
    providers: [BookService],
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(
      private bookService: BookService,
      private route: ActivatedRoute,
      private location: Location
  ) {
      this.route.params.subscribe(params => {
          if (params['genre']) {
              this.getBooks(params['genre']);
          } else {
              this.getBooksByCategory(params['category']);
          }
      });
  }

  ngOnInit() {}

    getBooks(genre: string): void {
        this.bookService.getBooks(genre)
            .subscribe(
                books => {
                    this.books = books.json();
                });
    }

    getBooksByCategory(category: string): void {
        this.bookService.getBooksByCategory(category)
            .subscribe(
                books => {
                    this.books = books.json();
                });
    }
}
