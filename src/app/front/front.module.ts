import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { MatListModule } from '@angular/material';
import { FrontRoutingModule } from './front-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppPipesModule } from '../app-pipes.module';

import { BookService } from '../services/book.service';
import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SearchService } from '../services/search.service';
import { CommentService } from '../services/comment.service';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SliderBestBooksComponent } from './components/slider-best-books/slider-best-books.component';
import { NewsGridComponent } from './components/news-grid/news-grid.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminModule } from '../admin/admin.module';
import { FrontComponent } from './front.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      MatListModule,
      AdminModule,
      NgbModule.forRoot(),
      BsDropdownModule.forRoot(),
      CarouselModule.forRoot(),
      MatGridListModule,
      MatCardModule,
      FrontRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      AppPipesModule,
  ],
  declarations: [
      HomePageComponent,
      HeaderComponent,
      NavComponent,
      SliderBestBooksComponent,
      NewsGridComponent,
      BooksComponent,
      BookComponent,
      FooterComponent,
      ArticleComponent,
      NewsComponent,
      BookDetailsComponent,
      SignupComponent,
      SigninComponent,
      ProfileComponent,
      LogoutComponent,
      FrontComponent,
      ShoppingCartComponent,
      UrlFormComponent,
      PaymentComponent,
      CommentsComponent,
      CommentComponent,
  ],
    providers: [
        BookService,
        NewsService,
        AuthService,
        CartService,
        PaymentService,
        BsModalService,
        SearchService,
        CommentService
    ],
    bootstrap: [FrontComponent]
})
export class FrontModule { }
