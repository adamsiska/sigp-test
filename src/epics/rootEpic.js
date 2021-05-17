import { combineEpics } from 'redux-observable';
import { searchMovies } from './specificEpics/commonEpic';

export default combineEpics(
  searchMovies,
);
