import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { Article } from '../../../models/article';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

    @Input() article: Observable<Article[]>;
    returnUrl: string;
    image: any;
    formData: any;

    constructor(
        private newsService: NewsService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
        this.formData = new FormData();
    }

  ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/news';
      this.getEditArticle();
  }

  getFiles(event) {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
          const file: File = fileList[0];
          const fileSize: number = fileList[0].size;
          if (fileSize <= 31457280) {
              this.formData.append('image', file);
          }
      }
  }

  getEditArticle(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.newsService.getArticle(id)
          .subscribe(
              article => {
                   this.article = article.json();
              });
  }

  postEditArticle(form: NgForm): void {
      this.formData.append('title', form.value.title);
      this.formData.append('text', form.value.text);
      this.formData.append('article_old_image', form.value.article_old_image);
      this.formData.append('id', form.value.id);
            this.newsService.postEditArticle(this.formData)
                .subscribe(
                    response => {
                        this.article = response.json();
                    });
      this.router.navigate([this.returnUrl]);
      window.location.reload();
  }
}
