import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUsers from "./store";
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "chepri-test";
  constructor(
    private _store: Store<fromUsers.IState>,
    public router: Router) { }
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
