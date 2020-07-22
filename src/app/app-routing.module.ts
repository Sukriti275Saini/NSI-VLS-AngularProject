import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { RegisterComponent } from './home/auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './videos/video-details/video-details.component';
import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ], canActivate: [LoginGuard]
    },
    { path: 'dashboard/:username', component: DashboardComponent, canActivate: [AuthGuard] },
    
    { path: 'videosList', component: VideosComponent },

    { path: 'video/:videoId', component: VideoDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}