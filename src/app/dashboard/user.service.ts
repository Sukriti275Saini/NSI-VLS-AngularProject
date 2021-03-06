import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }

    getDashboardUser(UserName: string): Observable<any> {
      const requestOptions = {
        params: new HttpParams().set('UserName', UserName)
      };
        return this.http.get(`${environment.base_url + environment.dashboard}`, requestOptions)
        .pipe(map(response => response));
    }

    getUserRecord(UserName: string): Observable<any> {
      const requestOptions = {
        params: new HttpParams().set('UserName', UserName)
      };
        return this.http.get(`${environment.base_url + environment.userRecord}`, requestOptions)
        .pipe(map(response => response));
    }

    deleteRecord(recordId: number): Observable<any> {
      const requestOptions = {
        params: new HttpParams().set('RecordId', recordId.toString())
      };
      //var testurl = `${environment.base_url + environment.deleteRecord}`;
        return this.http.delete(`${environment.base_url + environment.deleteRecord}`, requestOptions)
        .pipe(map(response => response));
    }

    // GetAgreement(applicationRequestID: number): Observable<any> {
    //   const requestOptions = {
    //     params: new HttpParams().set('applicationRequestID', applicationRequestID.toString()).append('password', Password)
    //   };
    //   return this._http.get(this.getAgreementUrl, requestOptions)
    //     .pipe(map(response => response));
    // }

}