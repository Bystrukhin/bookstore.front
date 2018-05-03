import { Component, OnInit } from '@angular/core';
import {Publisher} from '../../../models/publisher';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {PublisherService} from '../../../services/publisher.service';
import {PaginationService} from '../../../services/pagination.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})

export class PublishersComponent implements OnInit {

    publishers: Publisher[];
    returnUrl: string;
    pager: any = {};
    pagedPublishers: any[];

    constructor(
        private publisherService: PublisherService,
        private paginationService: PaginationService,
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
                    this.setPage(1);
                });
    }

    getDeletePublisher(id): void {
        this.publisherService.getDeletePublisher(id)
            .subscribe(
                response => {
                    window.location.reload();
                });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.paginationService.getPager(this.publishers.length, page);

        this.pagedPublishers = this.publishers.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
