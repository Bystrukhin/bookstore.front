import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() comment: Comment;

    constructor(
        private commentService: CommentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
    }

    onLike(item) {
        this.commentService.like(item);
    }

}
