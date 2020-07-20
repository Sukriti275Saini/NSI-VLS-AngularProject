import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class VideosService {

    constructor(private http: HttpClient) { }

    getVideos(): Observable<any> {
        return this.http.get(`${environment.base_url + environment.videosList}`);
    }

    getVideoDetails(VideoId: number): Observable<any> {
        const requestOptions = {
          params: new HttpParams().set('videoId', VideoId.toString())
        };
          return this.http.get(`${environment.base_url + environment.videoDetails}`, requestOptions)
          .pipe(map(response => response));
      }

}