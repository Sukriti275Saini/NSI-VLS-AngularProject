// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosService } from './videos.service';


import { VideosComponent } from './videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, '../app/assets/i18n', '.json');
}


@NgModule({
  declarations: [
    VideosComponent,
    VideoDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VideosRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps:[HttpClient]
      }
    })
    // Ng2SearchPipeModule
  ],
  providers: [VideosService],
  bootstrap: []
})
export class VideosModule { }
