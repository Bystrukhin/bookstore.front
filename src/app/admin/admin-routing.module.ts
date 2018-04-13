import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardGuard } from '../auth-guard.guard';

import {AdminComponent} from './admin.component';
import {BooksComponent} from './components/books/books.component';
import {BookAddComponent} from './components/book-add/book-add.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {OrdersComponent} from './components/orders/orders.component';
import {CommentsComponent} from './components/comments/comments.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {NewsComponent} from './components/news/news.component';
import {PublishersComponent} from './components/publishers/publishers.component';
import {PublisherEditComponent} from './components/publisher-edit/publisher-edit.component';
import {PublisherAddComponent} from './components/publisher-add/publisher-add.component';
import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleAddComponent} from './components/article-add/article-add.component';
import {AuthorsComponent} from './components/authors/authors.component';
import {AuthorAddComponent} from './components/author-add/author-add.component';
import {AuthorEditComponent} from './components/author-edit/author-edit.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'books', component: BooksComponent},
                    { path: 'news', component: NewsComponent},
                    { path: 'orders', component: OrdersComponent},
                    { path: 'comments', component: CommentsComponent},
                    { path: 'publishers', component: PublishersComponent},
                    { path: 'authors', component: AuthorsComponent},
                    { path: 'orders/:id', component: OrderDetailsComponent},
                    { path: 'news/:id/edit', component: ArticleEditComponent},
                    { path: 'news/add', component: ArticleAddComponent},
                    { path: 'books/add', component: BookAddComponent},
                    { path: 'books/:id/edit', component: BookEditComponent},
                    { path: 'publishers/add', component: PublisherAddComponent},
                    { path: 'publishers/:id/edit', component: PublisherEditComponent},
                    { path: 'authors/add', component: AuthorAddComponent},
                    { path: 'authors/:id/edit', component: AuthorEditComponent},
                ],
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
