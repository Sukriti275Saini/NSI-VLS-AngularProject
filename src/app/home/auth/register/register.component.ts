import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = null;

  constructor(private homeService: HomeService,
    private route: Router) { }

  ngOnInit(): void {
  }

  OnRegister(form: NgForm) {
    const body = {
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      userName: form.value.username,
      dateOfBirth: form.value.dob,
      profilepicture: null,
      email: form.value.email,
      password: form.value.passwordGroup.newpassword,
      confirmPassword: form.value.passwordGroup.cpassword,
      mobile: form.value.phoneno,
      address: form.value.address,
    }
    console.log(body);

    this.homeService.register(body).subscribe(
      response => {
        this.route.navigate(['dashboard', response.userName]);
        console.log(response, "response.userName");
      }, error => {
        this.error = error.error.message;
        console.log(error, "error");
      }
    );
  }

}