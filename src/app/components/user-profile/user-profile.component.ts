import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromUser from "../../store/user.selectors";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  id: number;
  userDetails: IUser;
  isAlbumVisible: boolean;
  isPostVisible: boolean;

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {

    this.store.pipe(select(fromUser.getUser(this.id))).subscribe(
      res => {
        // get single user details
        this.userDetails = res;
      }, err => {
        console.log(err);
      });
  }

  viewAlbums() {
    // for display albums
    this.isPostVisible = false;
    this.isAlbumVisible = true;
  }

  viewPosts() {
    // for display post
    this.isAlbumVisible = false;
    this.isPostVisible = true;
  }

}
