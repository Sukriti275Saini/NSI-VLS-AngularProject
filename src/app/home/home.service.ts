import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class HomeService {

    // isLoading = false;
    isLoggedIn;

    constructor(private http: HttpClient,
                private cookie: CookieService) { }


    getAuthStatus() {
        // this.isLoading = true;
        //console.log("getauthstatus", this.isLoading);
        //this.isLoggedIn = localStorage.getItem('Email') ? true : false;
         this.isLoggedIn = this.cookie.get('userName') ? true : false;
        return this.isLoggedIn;
    }


    register(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.register}`, body);
    }

    login(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.login}`, body);
    }


} 
