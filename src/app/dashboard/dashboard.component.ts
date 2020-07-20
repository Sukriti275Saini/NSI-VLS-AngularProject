import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.user = params['username'];
      }
    );

    this.getUser(this.user);
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

  onLogout(){
    this.router.navigate(['/']);
    }

}
