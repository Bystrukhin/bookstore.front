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
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/genre/' + genre,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getAllBooks(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getBooksByCategory(category): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/' + category,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getBook(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getGenres(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/genre',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getCategories(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/category',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeleteBook(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/books/destroy/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

    postEditBook(formData: any): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/books/update', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

    postAddBook(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/books', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

}
