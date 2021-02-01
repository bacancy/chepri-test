
import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { IState} from ".";


const allDataState = createFeatureSelector<IState>('allData');
// const getPostState = createFeatureSelector<IState>('posts');
// const getCommentState = createFeatureSelector<IState>('comments');
// const getUserState = createFeatureSelector<IState>('users');
// const getAlbumState = createFeatureSelector<IState>('albums');

export const allData = createSelector(allDataState, (state: IState) => {
    return state;
});

// export const allPosts = createSelector(getPostState, (state: IState) => {
//     return state.postData;
// });

// export const allComments = createSelector(getCommentState, (state: IState) => {
//     return state.commentData;
// });

// export const allUsers = createSelector(getUserState, (state: IState) => {
//     return state.userData;
// });

// export const allAlbums = createSelector(getAlbumState, (state: IState) => {
//     return state.albumData;
// });

export const getAlbumById = createSelector(allDataState, (state: IState, props) => {    
    const albums =  state.albumData.filter((data) => {
        return data.userId == props.myUserId
    })
    return { ...state, data: albums };    
});

export const getPhotoById = createSelector(allDataState, (state: IState, props) => {    
    const photos =  state.photoData.filter((data) => {
        return data.albumId == props.myAlbumId
    })
    return { ...state, data: photos };    
});

export const getPostsById = createSelector(allDataState, (state: IState, props) => {    
    const posts =  state.postData.filter((data) => {
        return data.userId == props.myUserId
    })
    return { ...state, data: posts };    
});


// export const firstTenUsers = createSelector(getPostState, (state: IState) => {
//     const posts = state.postData.slice(0, 10);
//     return { ...state, data: posts };
// });
