import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  video: any;

  constructor(private videoService: VideosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.video = +params['videoId'];
      }
    );

    this.getDetails(this.video);
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

}
