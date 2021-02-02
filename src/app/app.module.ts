import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AlbumComponent } from './components/album/album.component';

import { reducer } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    PhotoComponent,
    AlbumComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ allData: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 500 // Retains last 15 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
