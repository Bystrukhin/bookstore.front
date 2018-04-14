import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PublisherService {

    constructor(private http: Http) { }

    getPublisher(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers/' + id, options);
    }

    getPublishers(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers', options);
    }

    getDeletePublisher(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers/' + id + '/delete', options);
    }

    postEditPublisher(formData: any): Observable<any> {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/publishers/'
            + formData.get('id') + '/edit', formData, options);
    }

    postAddPublisher(formData: any) {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/publishers/add', formData, options);
    }

}
