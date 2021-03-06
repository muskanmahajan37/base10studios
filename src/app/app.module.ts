import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { B10HomeComponent } from './b10-home/b10-home.component';
import { B10SearchComponent } from './b10-search/b10-search.component';
import { B10HeaderComponent } from './b10-header/b10-header.component';
import { B10ContactsComponent } from './b10-contacts/b10-contacts.component';
import { B10ArticlesService } from "./b10-articles.service";
import { B10ArticleComponent } from './b10-article/b10-article.component';
import { B10ArticlePanelsComponent } from './b10-article-panels/b10-article-panels.component';
import { B10ArticleUploadComponent } from './b10-article-upload/b10-article-upload.component';
import { B10LoginComponent } from './b10-login/b10-login.component';
import { B10EngineComponent } from './b10-engine/b10-engine.component';
import {Base10StudiosRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    B10HomeComponent,
    B10SearchComponent,
    B10HeaderComponent,
    B10ContactsComponent,
    B10ArticleComponent,
    B10ArticlePanelsComponent,
    B10ArticleUploadComponent,
    B10LoginComponent,
    B10EngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Base10StudiosRoutingModule
  ],
  providers: [
    B10ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
