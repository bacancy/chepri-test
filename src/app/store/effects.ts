
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';
import { AlbumService } from '../_services/album.service';
import { PhotoService } from '../_services/photo.service';
import { Action } from '@ngrx/store';
import * as fromUsers from '.'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IPost } from '../_interfaces/post';
import { IComment } from '../_interfaces/comment';
import { IUser } from '../_interfaces/user';
import { IAlbum } from '../_interfaces/album';
import { IPhoto } from '../_interfaces/photo';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
        private postService: PostService,
        private userService: UserService,
        private albumService: AlbumService,
        private photoService: PhotoService,
        
        ) {
    }

    @Effect()
    getPosts$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.GetPostLoad),
        mergeMap(() =>
            this.postService.getPosts().pipe(
                map((user: IPost[]) => {
                    return new fromUsers.GetPostSuccess(user);
                }),
                catchError((error) =>
                    of(new fromUsers.GetPostFail(error)))
            )
        ));

    @Effect()
    getComments$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.GetCommentLoad),
        mergeMap(() =>
            this.postService.getComments().pipe(
                map((comment: IComment[]) => {
                    return new fromUsers.GetCommentSuccess(comment);
                }),
                catchError((error) =>
                    of(new fromUsers.GetCommentFail(error)))
            )
        ));

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.GetUserLoad),
        mergeMap(() =>
            this.userService.getUsers().pipe(
                map((user: IUser[]) => {
                    return new fromUsers.GetUserSuccess(user);
                }),
                catchError((error) =>
                    of(new fromUsers.GetUserFail(error)))
            )
        ));

    @Effect()
    getAlbums$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.GetAlbumLoad),
        mergeMap(() =>
            this.albumService.getAlbums().pipe(
                map((album: IAlbum[]) => {
                    return new fromUsers.GetAlbumSuccess(album);
                }),
                catchError((error) =>
                    of(new fromUsers.GetAlbumFail(error)))
            )
        ));

    @Effect()
    getPhotos$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.GetPhotoLoad),
        mergeMap(() =>
            this.photoService.getPhotos().pipe(
                map((photo: IPhoto[]) => {
                    return new fromUsers.GetPhotoSuccess(photo);
                }),
                catchError((error) =>
                    of(new fromUsers.GetPhotoFail(error)))
            )
        ));
}
