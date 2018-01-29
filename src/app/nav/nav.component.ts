import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log("Login Successfully");
    }, error => {
      console.log("Invalid Login");
    })
  }

  //LoggedIn checking
  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }

  //logout
  logout(){
    this.authService.UserToken=null;
    localStorage.removeItem('token');
    console.log("User Logged Out");
  }
}
