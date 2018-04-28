import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    getAllComments(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/comments',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getComments(id): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/comments/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    like (id): Observable<any> {
        return null;
    }

    postAddComment(book_id: number, user_id: number, text: string) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/comments',
            {book_id: book_id, user_id: user_id, text: text},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getUser(id) {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/user/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getUserComments(id): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/comments/user/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditComment(formData: any): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/comments/update', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

}
