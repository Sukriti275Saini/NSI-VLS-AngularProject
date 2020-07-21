import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;
  user: any;
  records: any[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.userName = params['username'];
      }
    );

    localStorage.setItem('userName', this.userName);

    this.getUser(this.userName);
    this.getRecord(this.userName);
  }

  getUser(userName: any){
    this.userService.getDashboardUser(userName).subscribe(
      response => {
        this.user = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
  }


  getRecord(userName: any){
    this.userService.getUserRecord(userName).subscribe(
      (data) => {
        this.records = data;
        console.log(data);
      },
      (error)=> {
        console.log(error);
      }
    );
  }


  delRecord(recordId){
    this.userService.deleteRecord(recordId).subscribe(
      (ok) => {
        console.log(ok);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  
  onReturnVideo(recordId){
    //console.log(recordId);
    if(confirm("Are you sure to return this video" + recordId?.video?.videoName)) {
      this.delRecord(recordId);
    }

  }


  onLogout(){
    this.router.navigate(['/']);
    }

}
