import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../../../models/comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    comments: Comment[];
    constructor(
        private commentService: CommentService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
      this.getComments();
    }

    getComments(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.commentService.getComments(id)
            .subscribe(
                response => {
                    this.comments = response.json();
                });
    }

}
