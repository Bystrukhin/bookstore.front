import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthorService {

    constructor(private httpNew: HttpClient, private http: Http) { }

    getAuthor(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getAuthors(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeleteAuthor(id: number): Observable<any> {
        return this.httpNew.delete('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': sessionStorage.getItem('token')})});
    }

    postEditAuthor(formData: any): Observable<any> {
        const token = sessionStorage.getItem('token');
        const body = new HttpParams()
            .set(`id`, formData.get('id'))
            .set(`first_name`, formData.get('first_name'))
            .set(`last_name`, formData.get('last_name'))
            .set(`country`, formData.get('country'));
        return this.httpNew.put('http://www.back-archive.biz.ua/public/index.php/api/authors/update', body,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postAddAuthor(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/authors', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

}
