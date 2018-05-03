import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

    @Input() user: Observable<User[]>;
    returnUrl: string;
    formData: any;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'user/profile';
        this.getEditUser();
    }

    getEditUser(): void {
        const id = +this.route.snapshot.paramMap.get('userId');
        this.authService.getEditUser(id)
            .subscribe(
                response => {
                    this.user = response;
                });
    }

    postEditUser(form: NgForm): void {
        this.formData.append('id', form.value.id);
        this.formData.append('name', form.value.name);
        this.formData.append('email', form.value.email);
        this.authService.postEditUser(this.formData)
            .subscribe(
                user => {
                    this.user = user;
                });
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate([this.returnUrl]);
    }
}
