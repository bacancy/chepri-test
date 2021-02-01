
import { IAlbum } from '../interfaces/album';
import { IComment } from '../interfaces/comment';
import { IPost } from '../interfaces/post';
import { IUser } from '../interfaces/user';
import { IPhoto } from '../interfaces/photo';
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

// export interface ICommentState {
//     data: IComment[];
//     isLoading: boolean;
//     message: string;
// }

// export interface IUserState {
//     data: IUser[];
//     isLoading: boolean;
//     message: string;
// }

// export interface IAlbumState {
//     data: IAlbum[];
//     isLoading: boolean;
//     message: string;
// }

const initialState: IState = {
    postData: [],
    commentData: [],
    userData: [],
    albumData: [],
    photoData: [],
    isLoading: false,
    message: ''
};

// const initialStateComment: ICommentState = {
//     data: [],
//     isLoading: false,
//     message: ''
// };

// const initialStateUser: IUserState = {
//     data: [],
//     isLoading: false,
//     message: ''
// };
// const initialStateAlbum: IUserState = {
//     data: [],
//     isLoading: false,
//     message: ''
// };

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

        default:
            return state;
    }
}

// export function commentReducer(state = initialStateComment, action: UserActions): any {

//     switch (action.type) {



//         default:
//             return state;
//     }
// }

// export function userReducer(state = initialStateUser, action: UserActions): any {

//     switch (action.type) {




//         default:
//             return state;
//     }
// }

// export function albumReducer(state = initialStateAlbum, action: UserActions): any {

//     switch (action.type) {




//         default:
//             return state;
//     }
// }
