import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';
import { IUser } from '../_interfaces/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {

  users: IUser[] = [];
  public isLoading: boolean;
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

  // redirect to posts route
  viewPosts(userId) {
    this.router.navigate(['posts',userId]);
  }

  // redirect to albums route
  viewAlbums(userId) {
    this.router.navigate(['albums',userId]);
  }
  

}
