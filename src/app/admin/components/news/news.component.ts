import {Component, OnInit} from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { Article } from '../../../models/article';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news: Article[];
    returnUrl: string;

    constructor(
        private newsService: NewsService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {   }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/news';
        this.getAllNews();
    }

    getAllNews(): void {
        this.newsService.getNews()
            .subscribe(
                news => {
                    this.news = news.json();
                });
    }

    getDeleteArticle(id): void {
        this.newsService.getDeleteArticle(id)
            .subscribe(
                response => {
                    console.log(response);
                });
        this.router.navigateByUrl(this.returnUrl);
    }
}
