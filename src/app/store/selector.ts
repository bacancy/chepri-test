
import { IState} from ".";
import { createFeatureSelector, createSelector, props } from "@ngrx/store";

const allDataState = createFeatureSelector<IState>('allData');

export const allData = createSelector(allDataState, (state: IState) => {
    return state;
});

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
