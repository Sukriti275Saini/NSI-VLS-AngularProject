import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.userName);
        //this.cookie.set('userName', response.userName);
        this.route.navigate(['dashboard', response.userName]);
        console.log(response, "response.userName");
      }, error => {
        this.error = error.error.message;
        console.log(error, "error");
      }
    );

  }

  
}
