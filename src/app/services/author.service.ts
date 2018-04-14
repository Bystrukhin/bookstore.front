import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthorService {

    constructor(private http: Http) { }

    getAuthor(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id, options);
    }

    getAuthors(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors', options);
    }

    getDeleteAuthor(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/authors/' + id + '/delete', options);
    }

    postEditAuthor(formData: any): Observable<any> {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/authors/'
            + formData.get('id') + '/edit', formData, options);
    }

    postAddAuthor(formData: any) {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/index.php/api/authors/add', formData, options);
    }

}
