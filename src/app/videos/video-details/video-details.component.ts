import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  existingUsername: string;
  videoId: any;
  video: any;
  singleRecord: any;
  record: any = {};
  myDate = new Date();

  constructor(private videoService: VideosService,
              private router: Router,
              private route: ActivatedRoute,
              private cookie: CookieService,
              private translateService: TranslateService) {

                translateService.setDefaultLang('en');

               }

  ngOnInit(): void {
    this.existingUsername = this.cookie.get('userName');
    this.route.params.subscribe(
      (params: Params) => {
        this.videoId = +params['videoId'];
      }
    );

    this.getDetails(this.videoId);
  }


  getDetails(VideoId: any){
    this.videoService.getVideoDetails(VideoId).subscribe(
      response => {
        this.video = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
  }


  addRecord(){
    //this.existingUsername = "Saini275";
    this.record.video = {};
    this.record.user = {};
    this.record.video.videoId = this.videoId;
    this.record.video.yearOfRelease = this.video.yearOfRelease;
    this.record.user.userName = this.existingUsername;
    // this.record.issueDate;
    // this.record.returnDate;


    this.videoService.postRecord(this.record).subscribe(
      response => {
        this.singleRecord = response;

        this.router.navigate(['dashboard', this.existingUsername]);
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );

  }

  

}
