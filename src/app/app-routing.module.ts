import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Routes = [
    
    // {
    //     path: '', component: HomeComponent, children: [
    //         { path: 'login', component: LoginComponent },
    //         { path: 'register', component: RegisterComponent }
    //     ], canActivate: [LoginGuard]
    // },

    {
        path: '', component: HomeComponent, 
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomeModule),
            // { path: 'login', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
            // { path: 'register', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
        canActivate: [LoginGuard],
    },

    //{ path: 'dashboard/:username', component: DashboardComponent, canActivate: [AuthGuard] },

    {
        path: 'dashboard/:username',
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },

    //{ path: 'videosList', component: VideosComponent },
    {
        path: '',
        loadChildren: () => import('./videos/videos.module')
            .then(m => m.VideosModule)
    }

    //{ path: 'video/:videoId', component: VideoDetailsComponent }
    // {
    //     path: 'video/:videoId',
    //     loadChildren: () => import('./videos/video-details/video-details.module')
    //         .then(m => m.VideoDetailsModule)
    // },


    // {
    //     path: 'videosList', component: VideosComponent, children: [
    //         { path: 'video/:videoId', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)}
    //     ],
    //     canActivate: [LoginGuard],
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}