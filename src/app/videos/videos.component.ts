import { Component, OnInit } from '@angular/core';
import { VideosService } from './videos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: [];

  constructor(private videoService: VideosService,
              private route: Router) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videoService.getVideos().subscribe(response=>{
      this.videos = response;
      console.log(response);
    },
    (error)=>{
      console.log(error);
      
    });
  }


  seeDetails(videoId){
    this.route.navigate(['video', videoId]);
  }

}
