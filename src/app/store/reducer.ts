
import { IAlbum } from '../_interfaces/album';
import { IComment } from '../_interfaces/comment';
import { IPost } from '../_interfaces/post';
import { IUser } from '../_interfaces/user';
import { IPhoto } from '../_interfaces/photo';
import { UserActions, UserActionTypes } from './actions';


export interface IState {
    postData: IPost[];
    commentData: IComment[];
    userData: IUser[];
    albumData: IAlbum[];
    photoData: IPhoto[];
    isLoading: boolean;
    message: string;
}

const initialState: IState = {
    postData: [],
    commentData: [],
    userData: [],
    albumData: [],
    photoData: [],
    isLoading: false,
    message: ''
};

export function reducer(state = initialState, action: UserActions): any {

    switch (action.type) {

        /* start : Photos actions*/
        case UserActionTypes.GetPostLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetPostSuccess: {
            return {
                ...state,
                postData: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetPostFail: {
            return {
                postData: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        /* end : Photos actions*/

        /* start : comment actions*/
        case UserActionTypes.GetCommentLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetCommentSuccess: {
            return {
                ...state,
                commentData: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetCommentFail: {
            return {
                commentData: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        /* end : comment actions*/

        /* start : user actions*/
        case UserActionTypes.GetUserLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetUserSuccess: {
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetUserFail: {
            return {
                userData: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        /* end : user actions*/

        /* start : album actions*/
        case UserActionTypes.GetAlbumLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetAlbumSuccess: {
            return {
                ...state,
                albumData: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetAlbumFail: {
            return {
                albumData: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        /* end : album actions*/

        /* start : photo actions*/
        case UserActionTypes.GetPhotoLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetPhotoSuccess: {
            return {
                ...state,
                photoData: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetPhotoFail: {
            return {
                photoData: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        /* end : photo actions*/

        default:
            return state;
    }
}