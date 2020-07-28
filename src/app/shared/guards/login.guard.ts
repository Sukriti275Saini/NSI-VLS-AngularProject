import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookie: CookieService) {
  }
    user;
  //existingUsername = localStorage.getItem('userName');

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
                if (!this.authService.getAuthStatus()) {
                  return true;
                }
                this.user = localStorage.getItem('user');
                //this.euserName = this.cookie.get('userName');
                this.router.navigate(['/dashboard', this.user]);
                return false;
  }
  
}
