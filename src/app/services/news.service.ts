import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export class NewsService {

  constructor(private httpNew: HttpClient, private http: Http) { }

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
        return this.httpNew.delete('http://www.back-archive.biz.ua/public/index.php/api/news/' + id,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postEditArticle(formData: any) {
        const body = new HttpParams()
            .set(`title`, formData.get('title'))
            .set(`text`, formData.get('text'))
            .set(`article_old_image`, formData.get('article_old_image'))
            .set(`id`, formData.get('id'));
        return this.httpNew.put('http://www.back-archive.biz.ua/public/index.php/api/news/update', body,
            {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')})});
    }

    postAddArticle(formData: any) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news', formData,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Authorization': sessionStorage.getItem('token')})});
    }
}
