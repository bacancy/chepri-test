import { Action } from '@ngrx/store';
import { IUser } from '../model/user.model';
import { IAlbum } from '../model/album.model';
import { IPost } from '../model/post.model';
import { IPhoto } from '../model/photo.model';
import { IComment } from '../model/comment.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',

  LoadAlbums = '[Album] Load Albums',
  LoadAlbumsSuccess = '[Album] Load Albums Success',
  LoadAlbumsFailure = '[Album] Load Albums Failure',

  LoadPosts = '[Posts] Load Posts',
  LoadPostsSuccess = '[Posts] Load Posts Success',
  LoadPostsFailure = '[Posts] Load Posts Failure',

  LoadPhotos = '[Photos] Load Photos',
  LoadPhotosSuccess = '[Photos] Load Photos Success',
  LoadPhotosFailure = '[Photos] Load Photos Failure',

  LoadComments = '[Comments] Load Comments',
  LoadCommentsSuccess = '[Comments] Load Comments Success',
  LoadCommentsFailure = '[Comments] Load Comments Failure',
}

//User list load action
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: IUser[] }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: string }) { }
}

//Album list load action
export class LoadAlbums implements Action {
  readonly type = UserActionTypes.LoadAlbums;
}

export class LoadAlbumsSuccess implements Action {
  readonly type = UserActionTypes.LoadAlbumsSuccess;
  constructor(public payload: { data: IAlbum[] }) { }
}

export class LoadAlbumsFailure implements Action {
  readonly type = UserActionTypes.LoadAlbumsFailure;
  constructor(public payload: { error: string }) { }
}
//Post list load action
export class LoadPosts implements Action {
  readonly type = UserActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = UserActionTypes.LoadPostsSuccess;
  constructor(public payload: { data: IPost[] }) { }
}

export class LoadPostsFailure implements Action {
  readonly type = UserActionTypes.LoadPostsFailure;
  constructor(public payload: { error: string }) { }
}

//Photos list load action
export class LoadPhotots implements Action {
  readonly type = UserActionTypes.LoadPhotos;
}

export class LoadPhototsSuccess implements Action {
  readonly type = UserActionTypes.LoadPhotosSuccess;
  constructor(public payload: { data: IPhoto[] }) { }
}

export class LoadPhototsFailure implements Action {
  readonly type = UserActionTypes.LoadPhotosFailure;
  constructor(public payload: { error: string }) { }
}
//Comments list load action
export class LoadComments implements Action {
  readonly type = UserActionTypes.LoadComments;
}

export class LoadCommentsSuccess implements Action {
  readonly type = UserActionTypes.LoadCommentsSuccess;
  constructor(public payload: { data: IComment[] }) { }
}

export class LoadCommentsFailure implements Action {
  readonly type = UserActionTypes.LoadCommentsFailure;
  constructor(public payload: { error: string }) { }
}

export type UserActions =
  LoadUsers | LoadUsersSuccess | LoadUsersFailure |
  LoadAlbums | LoadAlbumsSuccess | LoadAlbumsFailure |
  LoadPosts | LoadPostsSuccess | LoadPostsFailure |
  LoadPhotots | LoadPhototsSuccess | LoadPhototsFailure |
  LoadComments | LoadCommentsSuccess | LoadCommentsFailure;

