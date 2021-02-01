import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IPost } from '../../_interfaces/post';
import { IComment } from '../../_interfaces/comment';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  usersPosts: IPost[] = [];
  postsComments: IComment[] = [];
  userId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    const allData$ = this._store.pipe(select(fromUsers.allData));
    const posts$ = this._store.pipe(select(fromUsers.getPostsById, { userId: this.userId }));

    allData$.subscribe(res => {
      this.postsComments = res.commentData;
    });

    posts$.subscribe(res => {
      this.usersPosts = res.data;
    });   
  }

  back() {
    this.router.navigate(['/users']);
  }
}
