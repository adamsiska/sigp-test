import { APP_ACTIONS } from '../actionTypes';

export const searchMovies = (searchTerm:string) => (
  { type: APP_ACTIONS.SEARCH_MOVIES, payload: searchTerm }
);
export const setMovies = (res: IServerResponseList) => (
  { type: APP_ACTIONS.SET_MOVIES, payload: res.data.Search }
);

export const fetchNextMovies = (searchTerm: string, page:number) => (
  { type: APP_ACTIONS.FETCH_NEXT_MOVIES, payload: { searchTerm, page } }
);
export const addMovies = (res :IServerResponseList, page: number) => (
  { type: APP_ACTIONS.ADD_MOVIES, payload: { data: res.data.Search, page } }
);
export const setCurrentMovie = (id: string) => ({
  type: APP_ACTIONS.SET_CURRENT_MOVIE,
  payload: id,
});
export const setCurrentMovieFromServer = (movie: IFullMovie) => ({
  type: APP_ACTIONS.SET_FULL_CURRENT_MOVIE, payload: movie });

export const setFavoriteMovies = () => ({ type: APP_ACTIONS.SET_FAVORITE_MOVIES });

export const addFavoriteMovie = (movie: IFullMovie) => ({
  type: APP_ACTIONS.ADD_FAVORITE_MOVIE, payload: movie });

export const removeFavoriteMovie = (id: string) => ({
  type: APP_ACTIONS.REMOVE_FAVORITE_MOVIE, payload: id });

export const setSearchInput = (value: string) => ({
  type: APP_ACTIONS.SET_SEARCH_INPUT,
  payload: value });
