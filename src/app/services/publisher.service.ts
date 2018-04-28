import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PublisherService {

    constructor(private http: Http) { }

    getPublisher(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getPublishers(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeletePublisher(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers/destroy/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditPublisher(formData: any): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/publishers/update', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postAddPublisher(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/publishers', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

}
