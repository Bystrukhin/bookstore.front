import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../../../models/comment';
import { CommentService } from '../../../services/comment.service';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    comments: Comment[];
    user = false;
    currentUser: User[];
    token: boolean;
    formData: any;
    constructor(
        private commentService: CommentService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
      this.getComments();
        if (this.authService.getToken()) {
            this.user = true;
        } else {
            this.user = false;
        }
        if (this.authService.getUser()) {
            this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        }
    }

    getComments(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.commentService.getComments(id)
            .subscribe(
                response => {
                    this.comments = response.json();
                });
    }

    postAddComment(form: NgForm): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.formData.append('book_id', id);
        this.formData.append('user_id', form.value.user_id);
        this.formData.append('text', form.value.text);
        this.commentService.postAddComment(this.formData.get('book_id'),
            this.formData.get('user_id'), this.formData.get('text'))
            .subscribe(
                comments => {
                    this.comments = comments.json();
                    window.location.reload(true);
                });

    }
}
