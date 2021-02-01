import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/user.service';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as UserActions from "../../store/user.actions";
import * as fromUser from "../../store/user.selectors";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  UserArray: IUser[] = [];
  ErrorMsg: string = '';
  constructor(private service: UserService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    
    this.store.pipe(select(fromUser.getUsers)).subscribe(
      res => {
        // get user list
        this.UserArray = res;
      }, err => {
        console.log(err);
      });

  }

  userProfile(id) {
    this.router.navigateByUrl('/profile/' + id);
  }
}
