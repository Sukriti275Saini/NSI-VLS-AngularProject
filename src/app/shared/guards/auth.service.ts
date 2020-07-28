import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isLoggedIn = false;

    public getToken(): string {
        return localStorage.getItem('token');
      }

    getAuthStatus() {
        this.isLoggedIn = this.getToken() && localStorage.getItem('user') ? true : false;
        //console.log(this.isLoggedIn, "AuthStatus");
        // this.isLoggedIn = this.cookie.get('userName') ? true : false;
        return this.isLoggedIn;
    }
    

}