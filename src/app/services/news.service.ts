import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

    getNews(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news', options);
    }

    getLastNews(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/last', options);
    }

    getArticle(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/' + id, options);
    }

    getDeleteArticle(id: number): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/news/' + id + '/delete', options);
    }

    postEditArticle(formData: any) {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news/'
            + formData.get('id') + '/edit', formData, options);
    }

    postAddArticle(formData: any) {
        const headers = new Headers();
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/news/add', formData, options);
    }

}
