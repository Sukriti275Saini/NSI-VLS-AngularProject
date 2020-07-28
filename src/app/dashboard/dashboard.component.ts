import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;
  user: any;
  records: any[] = [];
  // data: any = [];
  contactPipe;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private translateService: TranslateService) {

                translateService.setDefaultLang('en');
                
               }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.userName = params['username'];
      }
    );

     //localStorage.setItem('userName', this.userName);

   this.getUser(this.userName);
    this.getRecord(this.userName);

  }

  getUser(userName: any){
     this.userService.getDashboardUser(userName).subscribe(
      response => {
        console.log(response);
         this.user = response;
         console.log(this.user);
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
        //console.log(data);
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
        this.records = this.records.filter((record) => record.recordId != recordId);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  
  onReturnVideo(rec){
    //console.log(recordId);
    if(confirm("Are you sure to return this video " + rec?.video?.videoName)) {
      this.delRecord(rec.recordId);
    }

  }

  onLogout(){
    //console.log('submit');
    //this.cookie.deleteAll();
    localStorage.clear();
    this.router.navigate(['/']);
    }

}