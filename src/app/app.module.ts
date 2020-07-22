import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeService } from '../app/home/home.service';
import { ConfirmEqualValidatorDirective } from './home/auth/register/confirm-equal-validator.directive';
import { UserService } from './dashboard/user.service';
import { VideosService } from './videos/videos.service';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { LoginGuard } from '../app/shared/guards/login.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { RegisterComponent } from './home/auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './videos/video-details/video-details.component';


export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    DashboardComponent,
    VideosComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [HomeService, UserService, VideosService, AuthGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
