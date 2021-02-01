import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from "@ngrx/store";
import { mergeMap, map, catchError, switchMap } from "rxjs/operators";
import * as UserActions from '../store/user.actions';
import { UserService } from '../user.service';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private service: UserService) { }

  //User list load effect
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadUsers),
    mergeMap(action => this.service.getUser().pipe(
      map(users => (new UserActions.LoadUsersSuccess({ data: users }))),
      catchError(err => of(new UserActions.LoadUsersFailure({ error: err })))
    ))
  )

  //Album list load effect
  @Effect()
  loadAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadAlbums),
    switchMap((action: UserActions.LoadAlbums) => this.service.getAlbums().pipe(
      map(albums => (new UserActions.LoadAlbumsSuccess({ data: albums }))),
      catchError(err => of(new UserActions.LoadAlbumsFailure({ error: err })))
    ))
  )

  //Post list load effect
  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadPosts),
    mergeMap((action: UserActions.LoadPosts) => this.service.getPosts().pipe(
      map(posts => (new UserActions.LoadPostsSuccess({ data: posts }))),
      catchError(err => of(new UserActions.LoadPostsFailure({ error: err })))
    ))
  )

  //Photo list load effect
  @Effect()
  loadPhotos$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadPhotos),
    mergeMap((action: UserActions.LoadPhotots) => this.service.getPhotos().pipe(
      map(photos => (new UserActions.LoadPhototsSuccess({ data: photos }))),
      catchError(err => of(new UserActions.LoadPhototsFailure({ error: err })))
    ))
  )

  //Comment list load effect
  @Effect()
  loadComments$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadComments),
    mergeMap((action: UserActions.LoadComments) => this.service.getComments().pipe(
      map(comments => (new UserActions.LoadCommentsSuccess({ data: comments }))),
      catchError(err => of(new UserActions.LoadCommentsFailure({ error: err })))
    ))
  )
}
