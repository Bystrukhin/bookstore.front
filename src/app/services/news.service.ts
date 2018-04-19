import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

    getNews(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getLastNews(): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/last',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getArticle(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    getDeleteArticle(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/' + id + '/delete',
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditArticle(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news/'
            + formData.get('id') + '/edit', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postAddArticle(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news/add', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }
}
