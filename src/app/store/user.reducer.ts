import { Action } from '@ngrx/store';
import { UserActionTypes, UserActions } from './user.actions';
import { IUser } from '../model/user.model';
import { IAlbum } from '../model/album.model';
import { IPost } from '../model/post.model';
import { IPhoto } from '../model/photo.model';
import { IComment } from '../model/comment.model';


export const userFeatureKey = 'usersState';

export interface State {
  users: IUser[];
  albums: IAlbum[];
  posts: IPost[];
  photos: IPhoto[];
  comments: IComment[];
  error: string;
}

export const initialState: State = {
  users: [],
  albums: [],
  posts: [],
  photos: [],
  comments: [],
  error: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    //User list load reducer
    case UserActionTypes.LoadUsers:
      return {
        ...state
      }

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }

    //Album list load reducer
    case UserActionTypes.LoadAlbums:
      return {
        ...state
      }

    case UserActionTypes.LoadAlbumsSuccess:
      return {
        ...state,
        albums: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadAlbumsFailure:
      return {
        ...state,
        albums: [],
        error: action.payload.error
      }

    //Post list load reducer
    case UserActionTypes.LoadPosts:
      return {
        ...state
      }

    case UserActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadPostsFailure:
      return {
        ...state,
        posts: [],
        error: action.payload.error
      }

    //Photo list load reducer
    case UserActionTypes.LoadPhotos:
      return {
        ...state
      }

    case UserActionTypes.LoadPhotosSuccess:
      return {
        ...state,
        photos: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadPhotosFailure:
      return {
        ...state,
        photos: [],
        error: action.payload.error
      }

    //Comments list load reducer
    case UserActionTypes.LoadComments:
      return {
        ...state
      }

    case UserActionTypes.LoadCommentsSuccess:
      return {
        ...state,
        comments: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadCommentsFailure:
      return {
        ...state,
        photos: [],
        error: action.payload.error
      }

    default:
      return { ...state };
  }

}
