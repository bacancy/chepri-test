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
   // this._store.dispatch(new fromUsers.GetUserLoad());
    const allData$ = this._store.pipe(select(fromUsers.allData));

    allData$.subscribe(res => {
      //this.isLoading = res.isLoading;
      this.users = res.userData;
      console.log("all data in uesrs===>", res);
    });
  }

  viewPosts(userId) {
    this.router.navigate(['posts',userId]);
  }
  viewAlbums(userId) {
    this.router.navigate(['albums',userId]);
  }
  

}
