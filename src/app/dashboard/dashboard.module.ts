import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserService } from './user.service';
import { ContactPipe } from '../shared/pipes/contact.pipe';


import { ViewUserComponent } from './view-user/view-user.component';


export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    DashboardComponent,
    ViewUserComponent,
    ContactPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [UserService],
  bootstrap: []
})
export class DashboardModule { }
