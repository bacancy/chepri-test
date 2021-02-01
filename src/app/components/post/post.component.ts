import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IPost } from '../../interfaces/post';
import { IComment } from '../../interfaces/comment';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: IPost[] = [];
  comments: IComment[] = [];
  userId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStore: Store<fromUsers.IState>,
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
    const allData$ = this.localStore.pipe(select(fromUsers.allData));
    const posts$ = this.localStore.pipe(select(fromUsers.getPostsById, { myUserId: this.userId }));

    allData$.subscribe(res => {
      this.comments = res.commentData;
    });

    posts$.subscribe(res => {
      this.posts = res.data;
    });
  }

  /** go Back to the album */
  goBack() {
    this.router.navigate(['dashboard']);
  }
}
