import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../models/author';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

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
        this.getEditAuthor();
    }

    getEditAuthor(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.authorService.getAuthor(id)
            .subscribe(
                response => {
                    this.author = response.json();
                });
    }

    postEditAuthor(form: NgForm): void {
        this.formData.append('first_name', form.value.first_name);
        this.formData.append('last_name', form.value.last_name);
        this.formData.append('country', form.value.country);
        this.formData.append('id', form.value.id);
        this.authorService.postEditAuthor(this.formData)
            .subscribe(
                response => {
                    this.author = response.json();
                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                });
    }

}
