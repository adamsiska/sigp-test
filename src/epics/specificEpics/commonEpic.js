/* eslint-disable no-unused-vars */
import { ofType } from 'redux-observable';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';
import { APP_ACTIONS } from '../../actions/actionTypes';
import { addMovies, setMovies } from '../../actions/specificActions/commonActions';

const fetchMovies = (searchValue, page) => {
  console.log(page);
  return axios
    .get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}&page=${page}`);
};

export const searchNewMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.SEARCH_MOVIES),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovies(payload, '1'))
    .pipe(
      map(setMovies),
      catchError((e) => of({ type: 'searchError' })),
    )),
);

export const searchNextMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.FETCH_NEXT_MOVIES),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovies(payload.searchTerm, payload.page))
    .pipe(
      map((res) => addMovies(res, payload.page)),
      catchError((e) => of({ type: 'searchError' })),
    )),
);
