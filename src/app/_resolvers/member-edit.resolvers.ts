import { Observable } from 'rxjs/Observable';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { User } from "../_models/User";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User>{

    constructor(private userService:UserService, private alertifyService:AlertifyService,
    private router:Router, private authService:AuthService){}

    resolve(route: ActivatedRouteSnapshot):Observable<User>{
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(error => {
            this.alertifyService.error('Problem Retriving data');
            this.router.navigate(['/members']);
            return Observable.of(null);
        });
    }
}