import { Component, OnInit } from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

    public items: Book[] = [];

    constructor(private bookService: BookService) {
      // bookService.getAllBooks()
      //     .subscribe(_ => this.items = _);
  }

  ngOnInit() {
  }
}
