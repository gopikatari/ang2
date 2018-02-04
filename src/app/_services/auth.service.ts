
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

    baseUrl = 'http://localhost:5000/api/auth/';
    UserToken: any;
    decodedToken: any;

    //jwthelper
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http) { }

    login(model: any) {

        return this.http.post(this.baseUrl + 'login', model, this.RequestOptions()).map(
            (response: Response) => {
                const user = response.json();
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
                    console.log(this.decodedToken);
                    this.UserToken = user.tokenString;

                }
            }).catch(this.handleError);
    }
    //
    private RequestOptions() {
        const headers = new Headers({ 'Content-type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
    //Register

    register(model: any) {
        return this.http.post(this.baseUrl + 'register', model, this.RequestOptions()).catch(this.handleError);
    }
    //Checking the JWT token
    loggedIn() {
        return tokenNotExpired('token');
    }

    //HandleErrors
    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';

        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '!' + '\n';
                }
            }
        }
        return Observable.throw(modelStateErrors || 'server Error');
    }


}