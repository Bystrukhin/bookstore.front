import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { Article} from '../../../models/article';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
    providers: [NewsService],
})
export class ArticleComponent implements OnInit {

    article: Article [];

  constructor(
      private newsService: NewsService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

    ngOnInit() {
        this.getArticle();
    }

    getArticle(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.newsService.getArticle(id)
            .subscribe(
                article => {
                    this.article = article.json();
                });
        console.log(this.article);
    }

}
