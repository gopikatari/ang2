import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolvers.';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';

import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router'
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolvers';
import { MemberEditResolver } from './_resolvers/member-edit.resolvers';
import { PreventUnsavedChanges } from './_guard/preventunsavedchanges.guard';


export const appRoutes: Routes =
    [
        { path: 'home', component: HomeComponent },
        {
            path: '',
            runGuardsAndResolvers: 'always',
            canActivate: [AuthGuard],
            children: [
                { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
                { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
                { path: 'member/edit', component: MemberEditComponent, resolve: {user:MemberEditResolver} , 
                canDeactivate: [PreventUnsavedChanges] },
                { path: 'list', component: ListsComponent },
                { path: 'messages', component: MessagesComponent },
            ]
        },

        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ];