import { Component, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs/Subject';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements DoCheck {
  currentUser = [];
  productsQuantity = 0;
  token: boolean;
  admin = false;
  results: Object;
  searchTerm$ = new Subject<string>();

    constructor(
        public location: Location,
        private cartService: CartService,
        private authService: AuthService,
        private searchService: SearchService
  ) {
        this.searchService.search(this.searchTerm$)
            .subscribe(results => {
                this.results = results.json();
            });
    }

  ngDoCheck() {
    if (this.authService.getToken()) {
        this.token = true;
    } else {
        this.token = false;
    }
    if (this.authService.getUser()) {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const newArr = this.currentUser.filter(function(item) {
            return item.admin === 1;
        });
        if (newArr.length > 0) {
            this.admin = true;
        } else {
            this.admin = false;
        }
    }
      this.productsQuantity = JSON.parse(sessionStorage.getItem('productsQuantity'));
  }
}
