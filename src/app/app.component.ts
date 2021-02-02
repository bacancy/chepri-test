import { Store } from '@ngrx/store';
import * as fromUsers from "./store";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chepri-test1';

  constructor(
    private router: Router,
    private _store: Store<fromUsers.IState>,
  ) {}

  ngOnInit() {
    this._store.dispatch(new fromUsers.GetPostLoad());
    this._store.dispatch(new fromUsers.GetCommentLoad());
    this._store.dispatch(new fromUsers.GetUserLoad());
    this._store.dispatch(new fromUsers.GetAlbumLoad());
    this._store.dispatch(new fromUsers.GetPhotoLoad());
  }

  home() {
    this.router.navigate(['users']);
  }
}
