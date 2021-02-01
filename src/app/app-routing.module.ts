import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAlbumsComponent } from './_components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './_components/album-photos/album-photos.component';
import { UserPostsComponent } from './_components/user-posts/user-posts.component';
import { HomeComponent } from './_components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: HomeComponent },
    { path: 'user-posts/:userId', component: UserPostsComponent },
    { path: 'user-albums/:userId', component: UserAlbumsComponent },
    { path: 'album-photos/:albumId', component: AlbumPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
