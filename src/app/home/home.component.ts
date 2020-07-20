import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isActive = true;
  showForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  loginform(){
    this.isActive = true;
    this.showForm = true;
  }

  registerform(){
    this.isActive = false;
    this.showForm = false;
  }

}
