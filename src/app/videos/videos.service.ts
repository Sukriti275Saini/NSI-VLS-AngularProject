import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class VideosService {

    // userRecordStatus;
    // recordStatus = new BehaviorSubject<any>('');

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
    
      postRecord(record: any): Observable<any> {
        //var test = `${environment.base_url + environment.newRecord}`;
        return this.http.post(`${environment.base_url + environment.newRecord}`, record)
        .pipe(map(response => response));
    }


    // set(status){
    //     console.log(this.userRecordStatus);
    //     this.recordStatus.next(status);
    // }

    // get(){
    //     return this.userRecordStatus;
    // }




}