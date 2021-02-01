
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
    message: string;
}

const initialState: IState = {
    postData: [],
    commentData: [],
    userData: [],
    albumData: [],
    photoData: [],
    message: ''
};

export function reducer(state = initialState, action: UserActions): any {

    switch (action.type) {
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
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetPostFail: {
            return {
                postData: [],
                message: 'Something went wrong!'
            }
        }

        case UserActionTypes.GetCommentLoad: {
            return {
                ...state,
            }
        }

        case UserActionTypes.GetCommentSuccess: {
            return {
                ...state,
                commentData: action.payload,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetCommentFail: {
            return {
                commentData: [],
                message: 'Something went wrong!'
            }
        }


        case UserActionTypes.GetUserLoad: {
            return {
                ...state,
            }
        }

        case UserActionTypes.GetUserSuccess: {
            return {
                ...state,
                userData: action.payload,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetUserFail: {
            return {
                userData: [],
                message: 'Something went wrong!'
            }
        }


        case UserActionTypes.GetAlbumLoad: {
            return {
                ...state,
            }
        }

        case UserActionTypes.GetAlbumSuccess: {
            return {
                ...state,
                albumData: action.payload,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetAlbumFail: {
            return {
                albumData: [],
                message: 'Something went wrong!'
            }
        }

        case UserActionTypes.GetPhotoLoad: {
            return {
                ...state,
            }
        }

        case UserActionTypes.GetPhotoSuccess: {
            return {
                ...state,
                photoData: action.payload,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetPhotoFail: {
            return {
                photoData: [],
                message: 'Something went wrong!'
            }
        }

        default:
            return state;
    }
}