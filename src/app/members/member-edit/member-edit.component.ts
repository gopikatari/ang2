import { UserService } from './../../_services/user.service';
import { AuthService } from './../../_services/auth.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  user: User;
  @ViewChild('editForm') editForm : NgForm;
  constructor(private route:ActivatedRoute,private alertifyService:AlertifyService,
  private authService:AuthService,private userService:UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.user=data['user'];
    });
  }

  UpdateUserDetails(){
    this.userService.updateUser(this.authService.decodedToken.nameid,this.user).subscribe(next =>{
      this.alertifyService.success("Profile updated Successfully");
      this.editForm.reset(this.user);
    },error=>{
this.alertifyService.error(error);
    })
    
  }

}
