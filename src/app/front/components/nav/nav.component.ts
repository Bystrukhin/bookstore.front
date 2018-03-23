import {Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CategoriesMenu } from '../../../models/categoriesMenu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    providers: [BookService],
})
export class NavComponent implements OnInit {
    categoriesMenu: CategoriesMenu[];
    width: number = 1000;
    height: number = 50;

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.bookService.getCategoriesMenu()
            .subscribe(
                categoriesMenu => {
                    this.categoriesMenu = categoriesMenu.json();
                });
    }
}
