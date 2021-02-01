import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from "../app/store/user.actions";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chepri-test1';
  constructor(private store: Store) {
    this.store.dispatch(new UserActions.LoadUsers());
    this.store.dispatch(new UserActions.LoadAlbums());
    this.store.dispatch(new UserActions.LoadPosts());
    this.store.dispatch(new UserActions.LoadPhotots());
    this.store.dispatch(new UserActions.LoadComments());

  }
}
