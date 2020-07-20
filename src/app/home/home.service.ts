import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

    constructor(private http: HttpClient) { }


    register(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.register}`,body); 
    }
    
    login(body): Observable<any> {
        return this.http.post(`${environment.base_url + environment.login}`,body);
    }
}