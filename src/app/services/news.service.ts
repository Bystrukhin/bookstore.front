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
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/destroy/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

    postEditArticle(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news/update', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }

    postAddArticle(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }
}
