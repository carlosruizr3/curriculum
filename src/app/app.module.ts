import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from "./services/user.service" ;
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {JtwInterceptor} from "./interceptor/jtw.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ListExperienceModule } from './pages/forms/list-experience/list-experience.module';
import { ListAboutModule } from './pages/forms/list-about/list-about.module';
import { ListEducationModule } from './pages/forms/list-education/list-education.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    ListExperienceModule,
    ListAboutModule,
    ListEducationModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS , useClass: JtwInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
