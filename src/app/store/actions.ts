
import { Action } from '@ngrx/store';
import { IPost } from '../_interfaces/post';
import { HttpErrorResponse } from '@angular/common/http';
import { IComment } from '../_interfaces/comment';
import { IUser } from '../_interfaces/user';
import { IAlbum } from '../_interfaces/album';
import { IPhoto } from '../_interfaces/photo';

export enum UserActionTypes {
    GetPostLoad = '[Post] Get Post',
    GetPostSuccess = '[Post] Get Post Success',
    GetPostFail = '[Post] Get Post Fail',

    GetCommentLoad = '[Comment] Get Comment',
    GetCommentSuccess = '[Comment] Get Comment Success',
    GetCommentFail = '[Comment] Get Comment Fail',

    GetUserLoad = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',

    GetAlbumLoad = '[Album] Get Album',
    GetAlbumSuccess = '[Album] Get Album Success',
    GetAlbumFail = '[Album] Get Album Fail',

    GetPhotoLoad = '[Photo] Get Photo',
    GetPhotoSuccess = '[Photo] Get Photo Success',
    GetPhotoFail = '[Photo] Get Photo Fail'
}

export class GetPostLoad implements Action {
    public readonly type = UserActionTypes.GetPostLoad;
}

export class GetPostSuccess implements Action {
    public readonly type = UserActionTypes.GetPostSuccess;

    constructor(public payload: IPost[]) { }
}

export class GetPostFail implements Action {
    public readonly type = UserActionTypes.GetPostFail;

    constructor(public error: HttpErrorResponse) { }
}

export class GetCommentLoad implements Action {
    public readonly type = UserActionTypes.GetCommentLoad;
}

export class GetCommentSuccess implements Action {
    public readonly type = UserActionTypes.GetCommentSuccess;

    constructor(public payload: IComment[]) { }
}

export class GetCommentFail implements Action {
    public readonly type = UserActionTypes.GetCommentFail;

    constructor(public error: HttpErrorResponse) { }
}


export class GetUserLoad implements Action {
    public readonly type = UserActionTypes.GetUserLoad;
}

export class GetUserSuccess implements Action {
    public readonly type = UserActionTypes.GetUserSuccess;

    constructor(public payload: IUser[]) { }
}

export class GetUserFail implements Action {
    public readonly type = UserActionTypes.GetUserFail;

    constructor(public error: HttpErrorResponse) { }
}

export class GetAlbumLoad implements Action {
    public readonly type = UserActionTypes.GetAlbumLoad;
}

export class GetAlbumSuccess implements Action {
    public readonly type = UserActionTypes.GetAlbumSuccess;

    constructor(public payload: IAlbum[]) { }
}

export class GetAlbumFail implements Action {
    public readonly type = UserActionTypes.GetAlbumFail;

    constructor(public error: HttpErrorResponse) { }
}

export class GetPhotoLoad implements Action {
    public readonly type = UserActionTypes.GetPhotoLoad;
}

export class GetPhotoSuccess implements Action {
    public readonly type = UserActionTypes.GetPhotoSuccess;

    constructor(public payload: IPhoto[]) { }
}

export class GetPhotoFail implements Action {
    public readonly type = UserActionTypes.GetPhotoFail;

    constructor(public error: HttpErrorResponse) { }
}

export type UserActions = GetPostLoad | GetPostSuccess | GetPostFail | GetCommentLoad | GetCommentSuccess | GetCommentFail | GetUserLoad | GetUserSuccess | GetUserFail| GetAlbumLoad | GetAlbumSuccess | GetAlbumFail | GetPhotoLoad | GetPhotoSuccess | GetPhotoFail;