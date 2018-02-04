import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private alertfiyService:AlertifyService,private router: Router,private authService:AuthService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.loggedIn()){
      return true;
    }
    this.alertfiyService.error("You are not authorised to view this page");
    this.router.navigate(['/home']);
    return false;
  }
}
