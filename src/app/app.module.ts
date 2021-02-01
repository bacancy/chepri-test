import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import {
  UserComponent, PostComponent, AlbumComponent, PhotoComponent
} from './components';

// Services
import {
  PostService, PhotoService, UserService, AlbumService
} from './services';

import { reducer } from './store/reducer';

// NPM Pacakges
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AlbumComponent,
    PhotoComponent
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
