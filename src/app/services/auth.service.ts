import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    signup(username: string, email: string, password: string) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/user/signup',
            {name: username, email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const user = response.json().user;
                    const newUser = [];
                    for (const item of user) {
                        newUser.push(item);
                    }
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, user: newUser, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    sessionStorage.setItem('token', JSON.stringify(tokenData.token));
                    sessionStorage.setItem('currentUser', JSON.stringify(tokenData.user));

                }
            );
    }

    signin(email: string, password: string) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/user/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const user = response.json().user;
                    const newUser = [];
                    for (const item of user) {
                        newUser.push(item);
                    }
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, user: newUser, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    sessionStorage.setItem('token', tokenData.token);
                    sessionStorage.setItem('currentUser', JSON.stringify(tokenData.user));
                }
            );
    }

    getEditUser(id: number): Observable<any> {
        return this.http.get('http://www.back-archive.biz.ua/public/index.php/api/user/' + id,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    postEditUser(id: number, name: string, email: string): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/user/'
            + id + '/edit',
        {id: id, name: name, email: email},
        {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    reset(email: string): Observable<any> {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/password/reset',
            {email: email},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('currentUser');
        return true;
    }

    getToken() {
        return sessionStorage.getItem('token');
    }

    getUser() {
        return sessionStorage.getItem('currentUser');
    }

}
