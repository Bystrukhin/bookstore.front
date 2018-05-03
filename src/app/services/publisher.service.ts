import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export class PublisherService {

    constructor(private httpNew: HttpClient, private http: Http) { }

    getPublisher(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getPublishers(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/publishers',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeletePublisher(id: number): Observable<any> {
        return this.httpNew.delete('http://www.back-archive.biz.ua/public/index.php/api/publishers/' + id,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postEditPublisher(formData: any): Observable<any> {
        const body = new HttpParams()
            .set(`id`, formData.get('id'))
            .set(`country`, formData.get('country'))
            .set(`address`, formData.get('address'))
            .set(`city`, formData.get('city'))
            .set(`publisher_name`, formData.get('publisher_name'));
        return this.httpNew.put('http://www.back-archive.biz.ua/public/index.php/api/publishers/update', body,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postAddPublisher(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/publishers', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

}
