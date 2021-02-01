import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';
import { IPost } from '../_interfaces/post';
import { IComment } from '../_interfaces/comment';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.scss']
})
export class GetPostComponent implements OnInit {

  posts: IPost[] = [];
  comments: IComment[] = [];
  public isLoading: boolean;
  userId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
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

  // public getFirstTenUsers(): void {
  //   const firstTenUsers$ = this._store.pipe(select(fromUsers.firstTenUsers));

  //   firstTenUsers$.subscribe(res => {
  //     this.isLoading = res.isLoading;
  //     this.posts = res.data;
  //   });
  // }
}
