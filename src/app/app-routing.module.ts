import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';


const ROUTES: Routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: '',
        loadChildren: 'app/front/front.module#FrontModule',
    },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
