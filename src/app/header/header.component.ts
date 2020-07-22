import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName;
  // loggedIn = false;

  constructor(private cookie: CookieService,
              private translateService: TranslateService) {
                
                translateService.setDefaultLang('en');
              
              }

  ngOnInit(): void {
    this.userName = this.cookie.get('userName');
    // if(this.userName){
    //   this.loggedIn = true;
    // }
  }

  switchLanguage(language: string){
    this.translateService.use(language);
  }


}
