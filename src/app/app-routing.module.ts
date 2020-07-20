import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { RegisterComponent } from './home/auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './videos/video-details/video-details.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    { path: 'dashboard/:username', component: DashboardComponent },
    
    { path: 'videosList', component: VideosComponent },

    { path: 'video/:videoId', component: VideoDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}