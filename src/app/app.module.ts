import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PostService } from './_services/post.service';
import { UserService } from './_services/user.service';
import { AlbumService } from './_services/album.service';
import { PhotoService } from './_services/photo.service';
//import { reducer, commentReducer, userReducer, albumReducer } from './store/reducer';
import { reducer} from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserPostsComponent } from './_components/user-posts/user-posts.component';
import { UserAlbumsComponent } from './_components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './_components/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPostsComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ allData: reducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 500, // Retains last 15 states
    }),
  ],
  providers: [PostService, UserService, AlbumService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
