import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NewsService} from '../../../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../../models/article';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

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
    }

    clearFile(form: NgForm) {
       form.value.image.setValue(null);
    }

    getFiles(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let fileSize: number = fileList[0].size;
            if (fileSize <= 10485760) {
                this.formData.append('image', file);
            }
        }
    }

    postAddArticle(form: NgForm): void {
        this.formData.append('title', form.value.title);
        this.formData.append('text', form.value.text);
        this.newsService.postAddArticle(this.formData)
            .subscribe(
                response => {
                    this.article = response.json();
                });
        this.router.navigate([this.returnUrl]);
        window.location.reload();
    }

}
