import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  category: number;
  genre: number;
  timer;
  returnUrl: string;

  constructor(
      private bookService: BookService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
  ) { }

  ngOnInit() {
      this.getAllBooks();
  }

  getAllBooks(): void {
      this.bookService.getAllBooks()
          .subscribe(
          books => {
              this.books = books.json();
          });
  }

    getDeleteBook(id): void {
        this.bookService.getDeleteBook(id)
            .subscribe(
                response => {
                    console.log(response);
                });
        this.router.navigateByUrl(this.returnUrl);
    }

  // down() {
  //       clearTimeout(this.timer);
  // }
  //
  // up () {
  //       this.timer = setTimeout(function () {
  //           const keywords = $('#search').val();
  //           if (keywords.length > 0) {
  //               $.ajax(
  //                   {
  //                       url: 'http://localhost/bookstore.back/public/index.php/api/',
  //                       type: 'post',
  //                       data: {keywords: keywords},
  //                       function (markup) {
  //                           $('#results').html(markup);
  //                       }
  //                   }
  //               );
  //           }
  //       }, 500);
  // }

}
