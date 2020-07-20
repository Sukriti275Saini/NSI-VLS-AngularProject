import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeService } from '../app/home/home.service';
import { ConfirmEqualValidatorDirective } from './home/auth/register/confirm-equal-validator.directive';
import { UserService } from './dashboard/user.service';
import { VideosService } from './videos/videos.service';

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
    FormsModule
  ],
  providers: [HomeService, UserService, VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
