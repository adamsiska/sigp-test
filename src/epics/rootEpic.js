import { combineEpics } from 'redux-observable';
import { searchNewMovies } from './specificEpics/commonEpic';

export default combineEpics(
  searchNewMovies,
);
