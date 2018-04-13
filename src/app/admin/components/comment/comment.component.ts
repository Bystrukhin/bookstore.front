import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../../models/comment';
import {Location} from '@angular/common';
import {AuthService} from '../../../services/auth.service';
import {CommentService} from '../../../services/comment.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    @Input() comment: Comment;
    user: User[];
    formData: any;

    constructor(
        private commentService: CommentService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.commentService.getUser(this.comment.user_id)
            .subscribe(
                user => {
                    this.user = user.json();
                });
    }

    onLike(item) {
        this.commentService.like(item);
    }

    postEditComment(form: NgForm): void {
        this.formData.append('visibility', form.value.visibility);
        this.formData.append('id', form.value.id);
        this.commentService.postEditComment(this.formData)
            .subscribe(
                comment => {
                    this.comment = comment.json();
                });
        window.location.reload();
    }

}
