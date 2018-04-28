import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FrontComponent} from './front.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileEditComponent} from './components/profile-edit/profile-edit.component';
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';
import {BooksComponent} from './components/books/books.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ArticleComponent} from './components/article/article.component';
import {NewsComponent} from './components/news/news.component';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {AboutComponent} from './components/about/about.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {UserCommentsComponent} from './components/user-comments/user-comments.component';
import {OrdersComponent} from './components/orders/orders.component';

const frontRoutes: Routes = [
    {
        path: '',
        component: FrontComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'books/:category', component: BooksComponent},
                    { path: 'books/:category/:genre', component: BooksComponent},
                    { path: 'books/:category/:genre/:id', component: BookDetailsComponent},
                    { path: 'cart', component: ShoppingCartComponent},
                    { path: 'delivery', component: DeliveryComponent},
                    { path: 'about', component: AboutComponent},
                    { path: 'news', component: NewsComponent},
                    { path: 'news/:id', component: ArticleComponent},
                    { path: 'user/signup', component: SignupComponent },
                    { path: 'user/signin', component: SigninComponent },
                    { path: 'user/profile', component: ProfileComponent },
                    { path: 'user/profile/edit/:userId', component: ProfileEditComponent },
                    { path: 'user/profile/comments/:userId', component: UserCommentsComponent },
                    { path: 'user/profile/orders/:userId', component: OrdersComponent },
                    { path: 'logout', component: LogoutComponent },
                    { path: '', component: HomePageComponent},
                ]
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(frontRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FrontRoutingModule { }
