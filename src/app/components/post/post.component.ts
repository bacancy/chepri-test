import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from "src/app/models/comment.interface";
import { IPost } from "src/app/models/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private location: Location,
    private _store: Store<fromUsers.IState>,
    private activatedRoute: ActivatedRoute
  ) { }

  isLoading: boolean;
  userId: string = '';
  posts: IPost[] = [];
  comments: IComment[] = [];

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    const allData$ = this._store.pipe(select(fromUsers.allData));
    const posts$ = this._store.pipe(select(fromUsers.getPostsById, { myUserId: this.userId }));

    allData$.subscribe(res => {
      this.comments = res.commentData;
    });

    posts$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.posts = res.data;
      this.posts.map(post => {
        return {
          ...post,
          isCollapse: false
        }
      })
    });
  }

  navigatoBack() {
    this.location.back();
  }
}
