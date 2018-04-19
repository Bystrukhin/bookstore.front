import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { PaginationService } from '../../../services/pagination.service';
import { Book } from '../../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  genre: number;
  returnUrl: string;
  pager: any = {};
  pagedBooks: any[];

  constructor(
      private bookService: BookService,
      private paginationService: PaginationService,
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
              this.setPage(1);
          });
  }

    getDeleteBook(id): void {
        this.bookService.getDeleteBook(id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.paginationService.getPager(this.books.length, page);

        this.pagedBooks = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
