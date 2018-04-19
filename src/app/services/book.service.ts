import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    getBestsellers(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/bestsellers',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getCategoriesMenu(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/categories_menu',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getBooks(genre): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/genre/' + genre,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getAllBooks(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getBooksByCategory(category): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/category/' + category,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getBook(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getGenres(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/genres',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeleteBook(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/' + id + '/delete',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditBook(formData: any): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/books/'
            + formData.get('id') + '/edit', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postAddBook(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/books/add', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

}
