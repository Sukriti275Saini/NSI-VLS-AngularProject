import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  @Input() userDetail: any ;
  //@Input() dataSent: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.userDetail,"dataSent.....");
  }

}
