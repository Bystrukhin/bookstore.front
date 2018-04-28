import {Component, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-slider-best-books',
  templateUrl: './slider-best-books.component.html',
  styleUrls: ['./slider-best-books.component.css']
})
export class SliderBestBooksComponent implements OnInit {
    bestsellers: any;
    constructor(
        private bookService: BookService,
    ) {}

    ngOnInit() {
        this.getBestsellers();
    }
    getBestsellers(): void {
        this.bookService.getBestsellers()
            .subscribe(
                books => {
                    this.bestsellers = books.json();
                });
    }
}
