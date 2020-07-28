import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AuthGuard } from '../app/shared/guards/auth.guard';
import { AuthService } from '../app/shared/guards/auth.service';
import { LoginGuard } from '../app/shared/guards/login.guard';
import { TokenInterceptor } from '../app/auth/token.interceptor';
// import { ContactPipe } from '../app/shared/pipes/contact.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    // ContactPipe
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

  providers: [AuthGuard, 
              AuthService, 
              LoginGuard,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: TokenInterceptor,
              multi: true
            }],

  bootstrap: [AppComponent]
})

export class AppModule { }
