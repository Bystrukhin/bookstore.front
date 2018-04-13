import { Component, OnInit, Input, } from '@angular/core';
import { Comment } from '../../../models/comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    @Input() comments: Comment[];

    constructor(
        private commentService: CommentService,
    ) { }

    ngOnInit() {
        this.getAllComments();
    }

    getAllComments(): void {
        this.commentService.getAllComments()
            .subscribe(
                comments => {
                    this.comments = comments.json();
                });
    }

}
