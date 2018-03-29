import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    getComments(id): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost/bookstore.back/public/index.php/api/comments/' + id, options);
    }

    like(id): Observable<any> {
        return null;
    }

}
