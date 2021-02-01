import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  { // Dashboard
    path: 'dashboard',
    component: UserComponent
  },
  { // Posts
    path: 'posts/:userId',
    component: PostComponent
  },
  { // Albums
    path: 'albums/:userId',
    component: AlbumComponent
  },
  { // Photos
    path: 'photos/:userId/:albumId',
    component: PhotoComponent
  },
  { // Default
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
