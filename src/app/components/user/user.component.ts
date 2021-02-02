import {Router} from '@angular/router';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private _store: Store<fromUsers.IState>
  ) { }

  users: IUser[] = [];
  isLoading: boolean = false;

  ngOnInit() {
    const allData$ = this._store.pipe(select(fromUsers.allData));
    allData$.subscribe(res => {
      this.users = res.userData;
    });
  }

  viewPosts(userId) {
    this.router.navigate(['posts',userId]);
  }
  
  viewAlbums(userId) {
    this.router.navigate(['albums',userId]);
  }

}
