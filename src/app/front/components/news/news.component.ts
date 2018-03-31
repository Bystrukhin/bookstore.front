import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    news = [];
    pager: any = {};
    pagedNews: any[];

    constructor(
        private newsService: NewsService,
        private paginationService: PaginationService,
    ) {}

    ngOnInit() {
        this.newsService.getNews()
            .subscribe(
                news => {
                    this.news = news.json();
                    this.setPage(1);
                });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.paginationService.getPager(this.news.length, page);

        this.pagedNews = this.news.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
