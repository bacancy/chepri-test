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
  title = 'Chepri Test';

  constructor(
    private localStore: Store<fromUsers.IState>,
    private readonly router: Router
  ) { }

  /** Load all details when page loads then use same details after it */
  ngOnInit() {
    this.localStore.dispatch(new fromUsers.GetPostLoad());
    this.localStore.dispatch(new fromUsers.GetCommentLoad());
    this.localStore.dispatch(new fromUsers.GetUserLoad());
    this.localStore.dispatch(new fromUsers.GetAlbumLoad());
    this.localStore.dispatch(new fromUsers.GetPhotoLoad());
  }

  get isOnDashboard(): boolean{
    return this.router.url === '/dashboard';
  }

  /** Route user to dashboard */
  goToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
