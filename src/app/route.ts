import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';

import {Routes} from '@angular/router'
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';


export const appRoutes : Routes=
[
    {path:'home',component:HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {path:'members',component:MemberListComponent} , 
            {path:'list',component:ListsComponent}  ,
            {path:'messages',component:MessagesComponent}  ,
        ]
    },
   
    {path:'**',redirectTo:'home',pathMatch:'full'}  
];