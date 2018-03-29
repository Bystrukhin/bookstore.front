import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../../models/author';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../../../services/author.service';


@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

    @Input() author: Observable<Author[]>;
    returnUrl: string;
    formData: any;

    constructor(
        private authorService: AuthorService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/authors';
    }

    postAddAuthor(form: NgForm): void {
        this.formData.append('first_name', form.value.first_name);
        this.formData.append('last_name', form.value.last_name);
        this.formData.append('country', form.value.country);
        this.authorService.postAddAuthor(this.formData)
            .subscribe(
                response => {
                    this.author = response.json();
                });
        this.router.navigate([this.returnUrl]);
        window.location.reload();
    }

}
