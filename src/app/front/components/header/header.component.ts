import { Component, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  currentUser = [];
  token: boolean;
  admin = false;

  constructor(
        public location: Location,
        private cartService: CartService,
        private authService: AuthService,
  ) { }

  ngDoCheck() {
    if (this.authService.getToken()) {
        this.token = true;
    } else {
        this.token = false;
    }
    if (this.authService.getUser()) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const newArr = this.currentUser.filter(function(item) {
            return item.admin === 1;
        });
        if (newArr.length > 0) {
            this.admin = true;
        } else {
            this.admin = false;
        }
    }
  }

  onURLChange(url) {
        this.cartService.flushCart();
  }
}
