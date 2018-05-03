import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export class BookService {

    constructor(private http: Http, private httpNew: HttpClient) { }

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
        return this.httpNew.delete('http://www.back-archive.biz.ua/public/index.php/api/books/' + id,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postEditBook(formData: any): Observable<any> {
        const body = new HttpParams()
            .set(`title`, formData.get('title'))
            .set(`description`, formData.get('description'))
            .set(`book_old_image`, formData.get('book_old_image'))
            .set(`id`, formData.get('id'))
            .set(`isbn`, formData.get('isbn'))
            .set(`publication_year`, formData.get('publication_year'))
            .set(`price`, formData.get('price'))
            .set(`genre_id`, formData.get('genre_id'))
            .set(`category_id`, formData.get('category_id'))
            .set(`stock_level`, formData.get('stock_level'))
            .set(`type_id`, formData.get('type_id'))
            .set(`publisher_id`, formData.get('publisher_id'))
            .set(`author_id`, formData.get('author_id'));
        return this.httpNew.put('http://www.back-archive.biz.ua/public/index.php/api/books/update', body,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postAddBook(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/books', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

}
