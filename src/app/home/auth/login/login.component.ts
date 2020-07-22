import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

error = null;

  constructor(private homeService: HomeService,
              private route: Router,
              private cookie: CookieService,
              private translateService: TranslateService) {

                translateService.setDefaultLang('en');

               }

  ngOnInit(): void {
  }

  onsubmitForm(form: NgForm) {
    const body = {
      userName: form.value.username,
      password: form.value.password
    }
    this.homeService.login(body).subscribe(
      response => {
        this.cookie.set('userName', response.userName);
        this.route.navigate(['dashboard', response.userName]);
        console.log(response, "response.userName");
      }, error => {
        this.error = error.error.message;
        console.log(error, "error");
      }
    );

  }

  
}
