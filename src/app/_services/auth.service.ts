import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    baseUrl = 'http://localhost:5000/api/auth/';
    UserToken: any;
    constructor(private http: Http) { }

    login(model: any) {

        return this.http.post(this.baseUrl + 'login', model, this.RequestOptions()).map(
            (response: Response) => {
                const user = response.json();
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    this.UserToken = user.tokenString;
                }
            });
    }
    //
    private RequestOptions() {
        const headers = new Headers({ 'Content-type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
    //Register

    register(model: any) {
        return this.http.post(this.baseUrl+'register',model,this.RequestOptions());
    }
}