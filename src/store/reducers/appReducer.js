import { uniqBy } from 'ramda';
import { APP_ACTIONS } from '../../actions/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: {},
  currentPage: 1,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_MOVIES: {
      const uniqueMovies = action.payload ? uniqBy((m) => m.imdbID, action.payload) : [];
      return { ...state, movies: uniqueMovies === undefined ? [] : uniqueMovies };
    }
    case APP_ACTIONS.ADD_MOVIES: {
      const { movies } = state;
      const { data, page } = action.payload;
      const uniqueMovies = uniqBy((m) => m.imdbID, [...movies, ...data]);
      return { ...state, movies: uniqueMovies, currentPage: page };
    }
    default:
      return state;
  }
};
