import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    getAllComments(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/comments', options);
    }

    getComments(id): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/comments/' + id, options);
    }

    like (id): Observable<any> {
        return null;
    }

    postAddComment(formData: any) {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/comments/add', formData, options);
    }

    getUser(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/user/' + id, options);
    }

    getUserComments(id): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.uak/public/index.php/api/comments/user/' + id, options);
    }

    postEditComment(formData: any): Observable<any> {
        console.log(formData.get('visibility'));
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/comments/'
            + formData.get('id') + '/edit', formData, options);
    }

}
