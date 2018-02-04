import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';
import { AlertifyService } from '../_services/alertify.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService,private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertifyService.success("Login Successfully");
    }, error => {
      this.alertifyService.error(error);
      //this.alertifyService.confirm('hsi',void('ok'));
    },()=>{
      this.router.navigate(['/members']);
    });
  }

  //LoggedIn checking
  loggedIn() {
    //const token=localStorage.getItem('token');
    //return !!token;
    return this.authService.loggedIn();
  }

  //logout
  logout() {
    this.authService.UserToken = null;
    localStorage.removeItem('token');
    this.alertifyService.message("User Logged Out");
    this.router.navigate(['/home']);
  }
}
