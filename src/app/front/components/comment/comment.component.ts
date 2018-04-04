import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CommentService} from '../../../services/comment.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() comment: Comment;
    user: User[];
    visible = true;

    constructor(
        private commentService: CommentService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.commentService.getUser(this.comment.user_id)
            .subscribe(
                user => {
                    this.user = user.json();
                });
        if (!this.comment.visible) {
            this.visible = false;
        }
    }

    onLike(item) {
        this.commentService.like(item);
    }

}
