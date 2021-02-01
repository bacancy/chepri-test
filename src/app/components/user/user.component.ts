import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IUser } from '../../interfaces/user';
import {Router} from '@angular/router';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[] = [];
  public isLoading: boolean;

  constructor(
    private router: Router,
    private localStore: Store<fromUsers.IState>,
  ) { }

  ngOnInit() {
    const allData$ = this.localStore.pipe(select(fromUsers.allData));

    allData$.subscribe(res => {
      //this.isLoading = res.isLoading;
      this.users = res.userData;
    });
  }

  /** Redirect user to the list of post page */
  viewPosts(userId) {
    this.router.navigate(['posts', userId]);
  }

  /** Redirect user to the album page */
  viewAlbums(userId) {
    this.router.navigate(['albums', userId]);
  }
}
