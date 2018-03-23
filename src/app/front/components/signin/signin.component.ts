import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    returnUrl: string;
    currentUser: User;
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSignin(form: NgForm) {
        this.authService.signin(form.value.email, form.value.password)
            .subscribe(
                data => this.router.navigateByUrl(this.returnUrl),
                error => console.log(error)
            );
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
