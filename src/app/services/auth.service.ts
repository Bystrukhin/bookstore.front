import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    signup(username: string, email: string, password: string) {
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/user/signup',
            {name: username, email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    signin(email: string, password: string) {
        return this.http.post('http://localhost/bookstore.back/public/index.php/api/user/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const user = response.json().user;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, user: user, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    sessionStorage.setItem('token', tokenData.token);
                    sessionStorage.setItem('currentUser', JSON.stringify(tokenData.user));

                }
            );
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
