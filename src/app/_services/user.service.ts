
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

    private baseUrl = environment.apiUrl;
    constructor(private authhttp: AuthHttp) {
    }
    getUsers(): Observable<User[]> {
        return this.authhttp.get(this.baseUrl + 'users/GetUsers')
            .map(response => <User[]>response.json())
            .catch(this.handleError);
    }

    getUser(id): Observable<User> {
        return this.authhttp.get(this.baseUrl + 'users/GetUser/' + id)
            .map(response => <User>response.json())
            .catch(this.handleError);
    }

    updateUser(id: number, user: User) {
        return this.authhttp.put(this.baseUrl + 'users/UpdateUser/' + id, user).catch(this.handleError);
    }

    // private jwt() {
    //     let token = localStorage.getItem('token');
    //     if (token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    //         headers.append('Content-type', 'application/json');
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
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