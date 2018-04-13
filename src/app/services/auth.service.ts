import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    signup(username: string, email: string, password: string) {
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/user/signup',
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
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/user/signin',
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
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost/bookstore.back/public/index.php/api/user/' + id, options);
    }

    postEditUser(formData: any): Observable<any> {
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/user/'
            + formData.get('id') + '/edit', formData, options);
    }

    reset(formData: any): Observable<any> {
        console.log(formData.get('email'));
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/password/reset',
            formData, options);
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
