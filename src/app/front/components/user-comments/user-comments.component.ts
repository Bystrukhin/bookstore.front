import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CommentService} from '../../../services/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

    comments: Comment[];

    constructor(
        private commentService: CommentService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getComments();
    }

    getComments(): void {
        const userId = +this.route.snapshot.paramMap.get('userId');
        this.commentService.getUserComments(userId)
            .subscribe(
                comments => {
                    this.comments = comments.json();
                });
    }

}
