import { APP_ACTIONS } from '../actionTypes';

export const searchMovies = (searchTerm) => (
  { type: APP_ACTIONS.SEARCH_MOVIES, payload: searchTerm }
);
export const setMovies = (res) => ({ type: APP_ACTIONS.SET_MOVIES, payload: res.data.Search });
export const fetchNextMovies = (searchTerm, page) => (
  { type: APP_ACTIONS.FETCH_NEXT_MOVIES, payload: { searchTerm, page } }
);
export const addMovies = (res, page) => (
  { type: APP_ACTIONS.ADD_MOVIES, payload: { data: res.data.Search, page } }
);
