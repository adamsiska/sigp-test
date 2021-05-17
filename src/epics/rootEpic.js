import { combineEpics } from 'redux-observable';
import { searchNewMovies, searchNextMovies } from './specificEpics/commonEpic';

export default combineEpics(
  searchNewMovies,
  searchNextMovies,
);
