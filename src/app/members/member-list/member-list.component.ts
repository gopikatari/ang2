import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../_models/User';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';


@Component({
  selector: 'app-member-list',
  templateUrl: '../member-list/member-list.component.html',
  styleUrls: ['../member-list/member-list.component.css']
})
export class MemberListComponent implements OnInit 
{

  users: User[];

  constructor(private userService: UserService, private alertifyService:AlertifyService,
  private route:ActivatedRoute) 
  { }

  ngOnInit() 
  {//this.loadUsers();
    this.route.data.subscribe(data =>{
      this.users=data['users'];
    })
  }

  // loadUsers()
  
  // {
  //   this.userService.getUsers().subscribe((users1:User[])=>{
  //     this.users=users1;
  //   },error=>{
  //     this.alertifyService.error(error);
  //   })
  // }
}
