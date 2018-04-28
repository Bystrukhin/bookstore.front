import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

    constructor(private bookService: BookService) {  }

  ngOnInit() {
  }
}
