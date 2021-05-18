/* eslint-disable complexity */
import { uniqBy, filter } from 'ramda';
import { APP_ACTIONS } from '../../actions/actionTypes';

const initialState = {
  movies: [],
  searchInput: '',
  selectedMovie: {},
  currentPage: 1,
  favoriteMovies: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_MOVIES: {
      const uniqueMovies = action.payload ? uniqBy((m) => m.imdbID, action.payload) : [];
      return { ...state, movies: uniqueMovies === undefined ? [] : uniqueMovies };
    }
    case APP_ACTIONS.ADD_MOVIES: {
      const { data, page } = action.payload;
      if (data === undefined) return state;
      const { movies } = state;
      const uniqueMovies = uniqBy((m) => m.imdbID, [...movies, ...data]);
      return { ...state, movies: uniqueMovies, currentPage: page };
    }
    case APP_ACTIONS.SET_CURRENT_MOVIE: {
      const { movies } = state;
      const id = action.payload;
      const selectedMovie = filter((m) => m.imdbID === id, movies)[0];
      return { ...state, selectedMovie };
    }
    case APP_ACTIONS.ADD_FAVORITE_MOVIE: {
      const { favoriteMovies } = state;
      const movie = action.payload;
      const newFavoriteMovies = [...favoriteMovies, movie];

      const favoriteMoviesJSON = JSON.stringify(newFavoriteMovies);
      localStorage.setItem('favoriteMoviesSIGP', favoriteMoviesJSON);

      return { ...state, favoriteMovies: newFavoriteMovies };
    }
    case APP_ACTIONS.REMOVE_FAVORITE_MOVIE: {
      const { favoriteMovies } = state;
      const id = action.payload;
      const newFavoriteMovies = filter((m) => m.imdbID !== id, favoriteMovies);

      const favoriteMoviesJSON = JSON.stringify(newFavoriteMovies);
      localStorage.setItem('favoriteMoviesSIGP', favoriteMoviesJSON);

      return { ...state, favoriteMovies: newFavoriteMovies };
    }
    case APP_ACTIONS.SET_FAVORITE_MOVIES: {
      const favoriteMoviesSIGP = localStorage.getItem('favoriteMoviesSIGP');
      const favoriteMovies = JSON.parse(favoriteMoviesSIGP);
      return { ...state, favoriteMovies };
    }
    case APP_ACTIONS.SET_FULL_CURRENT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case APP_ACTIONS.SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};
