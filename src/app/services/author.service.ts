import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthorService {

    constructor(private http: Http) { }

    getAuthor(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getAuthors(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeleteAuthor(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id + '/delete',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditAuthor(formData: any): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/authors/'
            + formData.get('id') + '/edit', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postAddAuthor(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/authors/add', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

}
