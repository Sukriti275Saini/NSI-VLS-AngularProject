import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HomeService {

    //isLoggedIn = false;

    constructor(private http: HttpClient) { }


    // getAuthStatus() {
    //     this.isLoggedIn = localStorage.getItem('token') && localStorage.getItem('user') ? true : false;
    //     console.log(this.isLoggedIn, "AuthStatus");
    //     // this.isLoggedIn = this.cookie.get('userName') ? true : false;
    //     return this.isLoggedIn;
    // }


    register(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.register}`, body);
    }

    login(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.login}`, body);
    }


} 
