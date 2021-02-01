import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IUser } from '../../_interfaces/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: IUser[] = [];
  constructor(
    private _store: Store<fromUsers.IState>,
    private readonly router: Router
  ) { }

  ngOnInit() {
    const allData$ = this._store.pipe(select(fromUsers.allData));

    allData$.subscribe(res => {
      this.users = res.userData;
    });
  }

  viewPosts(userId) {
    this.router.navigate(['user-posts',userId]);
  }
  viewAlbums(userId) {
    this.router.navigate(['user-albums',userId]);
  }
  
}
