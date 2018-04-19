import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {NgForm} from '@angular/forms';
import {PublisherService} from '../../../services/publisher.service';
import {AuthorService} from '../../../services/author.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

    @Input() book: Observable<Book[]>;
    returnUrl: string;
    image: any;
    formData: any;
    genre: any;
    publisher: any;
    author: any;

    constructor(
        private bookService: BookService,
        private publisherService: PublisherService,
        private authorService: AuthorService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/books';
        this.getGenres();
        this.getPublishers();
        this.getAuthors();
    }

    getFiles(event) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            const fileSize: number = fileList[0].size;
            if (fileSize <= 31457280) {
                this.formData.append('image', file);
            }
        }
    }

    getGenres(): void {
        this.bookService.getGenres()
            .subscribe(
                response => {
                    this.genre = response.json();
                });
    }

    getPublishers(): void {
        this.publisherService.getPublishers()
            .subscribe(
                response => {
                    this.publisher = response.json();
                });
    }

    getAuthors(): void {
        this.authorService.getAuthors()
            .subscribe(
                response => {
                    this.author = response.json();
                });
    }

    postAddBook(form: NgForm): void {
        this.formData.append('title', form.value.title);
        this.formData.append('description', form.value.description);
        this.formData.append('article_old_image', form.value.article_old_image);
        this.formData.append('id', form.value.id);
        this.formData.append('isbn', form.value.isbn);
        this.formData.append('publication_year', form.value.publication_year);
        this.formData.append('price', form.value.price);
        this.formData.append('genre_id', form.value.genre_id);
        this.formData.append('stock_level', form.value.stock_level);
        this.formData.append('type_id', form.value.type_id);
        this.formData.append('publisher_id', form.value.publisher_id);
        this.formData.append('author_id', form.value.author_id);
        this.bookService.postAddBook(this.formData)
            .subscribe(
                book => {
                    this.book = book.json();
                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                });
    }

}
