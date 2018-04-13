import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './components/books/books.component';
import { NewsComponent } from './components/news/news.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { OrdersComponent } from './components/orders/orders.component';

import { PublisherService } from '../services/publisher.service';
import { AuthorService } from '../services/author.service';

import { FilterPipe } from '../pipes/filter.pipe';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { PublisherAddComponent } from './components/publisher-add/publisher-add.component';
import { PublisherEditComponent } from './components/publisher-edit/publisher-edit.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorAddComponent } from './components/author-add/author-add.component';
import { AppPipesModule } from '../app-pipes.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbDropdownModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule
  ],
  declarations: [
      AdminComponent,
      BooksComponent,
      NewsComponent,
      SidebarComponent,
      HeaderComponent,
      FilterPipe,
      ArticleEditComponent,
      ArticleAddComponent,
      OrdersComponent,
      OrderDetailsComponent,
      BookAddComponent,
      BookEditComponent,
      PublishersComponent,
      PublisherAddComponent,
      PublisherEditComponent,
      AuthorsComponent,
      AuthorEditComponent,
      AuthorAddComponent,
      CommentsComponent,
      CommentComponent,
  ],
    providers: [
    PublisherService, AuthorService
],
})
export class AdminModule { }
