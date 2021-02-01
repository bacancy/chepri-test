import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUser from "../../store/user.selectors";
import * as UserActions from "../../store/user.actions";
import { IPost } from 'src/app/model/post.model';
import { IComment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  @Input() userId: number;
  ErrorMsg: string;
  postArray: IPost[];
  commentsArray: IComment[];
  collapseArray = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(fromUser.getPostsById({ id: this.userId }))).subscribe(
      res => {
        // get post data
        this.postArray = res.posts;
        this.postArray.forEach(element => {
          this.collapseArray.push({ isCollapsed: true });
        });        
      }, err => {
        console.log(err);
      });
  }

  // toggle collapse
  toggle(i, item) {
    this.collapseArray[i].isCollapsed = !this.collapseArray[i].isCollapsed;
    if (!this.collapseArray[i].isCollapsed) {
      this.store.pipe(select(fromUser.getCommentById({ id: item.id }))).subscribe(
        res => {
          this.commentsArray = res.comments.slice(0, 5);          
        }, err => {
          console.log(err);
        });
    }
  }
}
