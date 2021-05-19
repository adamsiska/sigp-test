import { combineEpics } from 'redux-observable';
import { getMovie, searchNewMovies, searchNextMovies } from './specificEpics/commonEpic';

export default combineEpics(
  searchNewMovies,
  searchNextMovies,
  getMovie,
);
