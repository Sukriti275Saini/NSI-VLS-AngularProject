// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { ConfirmEqualValidatorDirective } from './auth/register/confirm-equal-validator.directive';


import { HomeComponent } from './home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [HomeService],
  bootstrap: []
})
export class HomeModule { }
