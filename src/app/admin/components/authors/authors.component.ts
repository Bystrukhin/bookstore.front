import { Component, OnInit } from '@angular/core';
import {Author} from '../../../models/author';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

    authors: Author[];
    returnUrl: string;

    constructor(
        private authorService: AuthorService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getAllAuthors();
    }

    getAllAuthors(): void {
        this.authorService.getAuthors()
            .subscribe(
                response => {
                    this.authors = response.json();
                });
    }

    getDeleteAuthor(id): void {
        this.authorService.getDeleteAuthor(id)
            .subscribe(
                response => {
                    console.log(response);
                });
        this.router.navigateByUrl(this.returnUrl);
        window.location.reload();
    }

}
