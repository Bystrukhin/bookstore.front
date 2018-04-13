import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/comment';
import { CommentService } from '../../../services/comment.service';
import { Order } from '../../../models/order';
import { CartService } from '../../../services/cart.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  comments: Comment[];
  user: User[];

  constructor(
      private commentService: CommentService,
      private cartService: CartService,
      private authService: AuthService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
  ) { }

  ngOnInit() {
      if (this.authService.getUser()) {
          this.user = JSON.parse(sessionStorage.getItem('currentUser'));
      }
  }
}
