import { Component, OnInit, TemplateRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    returnUrl: string;
    currentUser: User[];
    modalRef: BsModalRef;
    error_message = false;
    success_message = false;
    formData: any;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: BsModalService,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSignin(form: NgForm) {
        this.authService.signin(form.value.email, form.value.password)
            .subscribe(
                data => this.router.navigate([this.returnUrl]),
                error => console.log(error)
            );
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    onForgotPassword(form: NgForm) {
        this.formData.append('email', form.value.email);
        this.authService.reset(this.formData)
            .subscribe(
                data => this.success_message = true,
                error => this.error_message = true
            );
        this.decline();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    }

    decline(): void {
        this.modalRef.hide();
    }
}
