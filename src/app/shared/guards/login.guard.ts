import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeService } from '../../home/home.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private cookie: CookieService) {
  }
    euserName;
  //existingUsername = localStorage.getItem('userName');

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.homeService.getAuthStatus()) {
      return true;
    }
    
    this.euserName = this.cookie.get('userName');
    this.router.navigate(['/dashboard', this.euserName]);
    return false;
  }
}
