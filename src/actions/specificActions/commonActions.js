import { APP_ACTIONS } from '../actionTypes';

export const searchMovie = () => ({ type: APP_ACTIONS.SEARCH_MOVIES });
export const setMovies = (res) => ({ type: APP_ACTIONS.SET_MOVIES, payload: res.data.Search });
