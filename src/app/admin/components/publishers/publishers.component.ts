import { Component, OnInit } from '@angular/core';
import {Publisher} from '../../../models/publisher';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {PublisherService} from '../../../services/publisher.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})

export class PublishersComponent implements OnInit {

    publishers: Publisher[];
    returnUrl: string;

    constructor(
        private publisherService: PublisherService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getAllPublishers();
    }

    getAllPublishers(): void {
        this.publisherService.getPublishers()
            .subscribe(
                response => {
                    this.publishers = response.json();
                });
    }

    getDeletePublisher(id): void {
        this.publisherService.getDeletePublisher(id)
            .subscribe(
                response => {
                    console.log(response);
                });
        this.router.navigate([this.returnUrl]);
        window.location.reload();
    }
}
