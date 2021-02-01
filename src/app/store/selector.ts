
import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { IState} from ".";

const allDataState = createFeatureSelector<IState>('allData');

export const allData = createSelector(allDataState, (state: IState) => {
    return state;
});


export const getAlbumById = createSelector(allDataState, (state: IState, props) => {    
    const albums =  state.albumData.filter((data) => {
        return data.userId == props.userId
    })
    return { ...state, data: albums };    
});

export const getPhotoById = createSelector(allDataState, (state: IState, props) => {    
    const photos =  state.photoData.filter((data) => {
        return data.albumId == props.albumId
    })
    return { ...state, data: photos };    
});

export const getPostsById = createSelector(allDataState, (state: IState, props) => {    
    const posts =  state.postData.filter((data) => {
        return data.userId == props.userId
    })
    return { ...state, data: posts };    
});
