import { APP_ACTIONS } from '../actionTypes';

export const searchMovies = (searchTerm) => (
  { type: APP_ACTIONS.SEARCH_MOVIES, payload: searchTerm }
);
export const setMovies = (res) => ({ type: APP_ACTIONS.SET_MOVIES, payload: res.data.Search });
