import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


@Injectable()
export class CommentService {

    constructor(private httpNew: HttpClient, private http: Http) { }

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
        const body = new HttpParams()
            .set(`id`, formData.get('id'))
            .set(`visibility`, formData.get('visibility'));
        return this.httpNew.put('http://www.back-archive.biz.ua/public/index.php/api/comments/update', body,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

}
