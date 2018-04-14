import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {

    constructor(private http: Http) {
    }

    makePayment(token, products) {
        return this.http.post('http://www.back-archive.biz.ua/public/index.php/api/checkout',
            {token: token.id, products: products},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }
}
