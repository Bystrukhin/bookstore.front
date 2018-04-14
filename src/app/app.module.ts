import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './front/front.module';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { PaginationService } from './services/pagination.service';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    AdminModule,
    FrontModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PaginationService, AuthGuardGuard, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}

