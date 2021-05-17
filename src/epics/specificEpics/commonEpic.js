/* eslint-disable no-unused-vars */
import { ofType } from 'redux-observable';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';
import { APP_ACTIONS } from '../../actions/actionTypes';
import { setMovies } from '../../actions/specificActions/commonActions';

const fetchMovies = (searchValue) => {
  console.log(searchValue);
  return axios
    .get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}&page=13`);
};

export const searchNewMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.SEARCH_MOVIES),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovies(payload))
    .pipe(
      map(setMovies),
      catchError((e) => of({ type: 'searchError' })),
    )),
);
