import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './admin.component';
import {BooksComponent} from './components/books/books.component';
import {BookAddComponent} from './components/book-add/book-add.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {OrdersComponent} from './components/orders/orders.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {NewsComponent} from './components/news/news.component';
import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleAddComponent} from './components/article-add/article-add.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'books', component: BooksComponent},
                    { path: 'news', component: NewsComponent},
                    { path: 'orders', component: OrdersComponent},
                    { path: 'orders/:id', component: OrderDetailsComponent},
                    { path: 'news/:id/edit', component: ArticleEditComponent},
                    { path: 'news/add', component: ArticleAddComponent},
                    { path: 'books/add', component: BookAddComponent},
                    { path: 'books/:id/edit', component: BookEditComponent},
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
