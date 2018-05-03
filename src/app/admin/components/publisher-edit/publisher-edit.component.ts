import { Component, OnInit, Input } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';
import { Publisher } from '../../../models/publisher';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.css']
})
export class PublisherEditComponent implements OnInit {

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
        this.getEditPublisher();
    }

    getEditPublisher(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.publisherService.getPublisher(id)
            .subscribe(
                response => {
                    this.publisher = response.json();
                });
    }

    postEditPublisher(form: NgForm): void {
        this.formData.append('publisher_name', form.value.publisher_name);
        this.formData.append('address', form.value.address);
        this.formData.append('city', form.value.city);
        this.formData.append('id', form.value.id);
        this.formData.append('country', form.value.country);
        this.publisherService.postEditPublisher(this.formData)
            .subscribe(
                response => {
                    this.publisher = response;
                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                });
    }

}
