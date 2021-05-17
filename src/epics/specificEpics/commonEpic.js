/* eslint-disable no-unused-vars */
import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';
import { APP_ACTIONS } from '../../actions/actionTypes';
import { setMovies } from '../../actions/specificActions/commonActions';

const fetchMovies = (searchValue) => axios
  .get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}`);

export const searchMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.SEARCH_MOVIES),
  mergeMap(({ payload }) => from(fetchMovies(payload))
    .pipe(
      map(setMovies),
      catchError((e) => of({ type: 'searchError' })),
    )),
);
