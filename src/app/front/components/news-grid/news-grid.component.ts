import {Component, OnInit} from '@angular/core';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {
    news = [];

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.newsService.getLastNews()
            .subscribe(
                news => {
                    this.news = news.json();
                });
    }
}
