import { Component, OnInit } from '@angular/core';
import {Author} from '../../../models/author';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../../services/author.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

    authors: Author[];
    returnUrl: string;
    pager: any = {};
    pagedAuthors: any[];

    constructor(
        private authorService: AuthorService,
        private paginationService: PaginationService,
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
                    this.setPage(1);
                });
    }

    getDeleteAuthor(id): void {
        this.authorService.getDeleteAuthor(id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigateByUrl(this.returnUrl);
                    window.location.reload();
                });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.paginationService.getPager(this.authors.length, page);

        this.pagedAuthors = this.authors.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
