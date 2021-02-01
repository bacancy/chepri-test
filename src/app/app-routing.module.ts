import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAlbumComponent } from './get-album/get-album.component';
import { GetPhotoComponent } from './get-photo/get-photo.component';
import { GetPostComponent } from './get-post/get-post.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
    { path: '', component: GetUserComponent },
    { path: 'users', component: GetUserComponent },
    { path: 'posts/:userId', component: GetPostComponent },
    { path: 'albums/:userId', component: GetAlbumComponent },
    { path: 'photos/:albumId', component: GetPhotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
