import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';
import { IAlbum } from '../model/album.model';
import { IPost } from '../model/post.model';

const getUserFeatureState = createFeatureSelector<State>('usersState');

//User list selector
export const getUsers = createSelector(getUserFeatureState, state => state.users);
export const getUserError = createSelector(getUserFeatureState, state => state.error);
export const getUser = (index) => createSelector(getUserFeatureState, state => state.users.find(id => id.id == index));

//Album list selector
export const getAlbumById = (props) => createSelector(getUserFeatureState, state => {
  const albums: IAlbum[] = state.albums.filter((data) => {
    return data.userId == props.id
  })
  return { ...state, albums: albums };
});

//Post list selector
export const getPostsById = (props) => createSelector(getUserFeatureState, state => {
  const posts: IPost[] = state.posts.filter((data) => {
    return data.userId == props.id
  })
  return { ...state, posts: posts };
});

//Photo list selector
export const getPhotoById = (props) => createSelector(getUserFeatureState, state => {
  const photos = state.photos.filter((data) => {
    return data.albumId == props.id
  })
  return { ...state, photos: photos };
});

//comments list selector
export const getCommentById = (props) => createSelector(getUserFeatureState, state => {
  const photos = state.comments.filter((data) => {
    return data.postId == props.id
  })
  return { ...state, photos: photos };
});
