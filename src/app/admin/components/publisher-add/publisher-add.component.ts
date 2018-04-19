import {Component, Input, OnInit} from '@angular/core';
import {Publisher} from '../../../models/publisher';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {PublisherService} from '../../../services/publisher.service';

@Component({
  selector: 'app-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrls: ['./publisher-add.component.css']
})
export class PublisherAddComponent implements OnInit {

    @Input() publisher: Observable<Publisher[]>;
    returnUrl: string;
    formData: any;

    constructor(
        private publisherService: PublisherService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/publishers';
    }

    postAddPublisher(form: NgForm): void {
        this.formData.append('publisher_name', form.value.publisher_name);
        this.formData.append('address', form.value.address);
        this.formData.append('city', form.value.city);
        this.formData.append('country', form.value.country);
        this.publisherService.postAddPublisher(this.formData)
            .subscribe(
                response => {
                    this.publisher = response.json();
                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                });
    }

}
