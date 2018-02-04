import { AuthGuard } from './_guard/auth.guard';
import { AlertifyService } from './_services/alertify.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';




@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
