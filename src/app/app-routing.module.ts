import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'users',
    pathMatch: 'full'
  },
  { 
    path: 'users', 
    component: UserComponent
  },
  { 
    path: 'posts/:userId',
    component: PostComponent 
  },
  { 
    path: 'albums/:userId', 
    component: AlbumComponent 
  },
  { 
    path: 'photos/:albumId',
    component: PhotoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
