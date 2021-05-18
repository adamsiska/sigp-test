import { ofType } from 'redux-observable';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { from, of } from 'rxjs';
import { APP_ACTIONS } from '../../actions/actionTypes';
import { addMovies, setCurrentMovieFromServer, setMovies } from '../../actions/specificActions/commonActions';

const fetchMovies = (searchValue, page) => axios
  .get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}&page=${page}`);

const fetchMovie = (id) => axios
  .get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`);

export const searchNewMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.SEARCH_MOVIES),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovies(payload, '1'))
    .pipe(
      map(setMovies),
      catchError(of({ type: 'searchError' })),
    )),
);

export const searchNextMovies = (action$) => action$.pipe(
  ofType(APP_ACTIONS.FETCH_NEXT_MOVIES),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovies(payload.searchTerm, payload.page))
    .pipe(
      map((res) => addMovies(res, payload.page)),
      catchError(of({ type: 'searchError' })),
    )),
);

export const getMovie = (action$) => action$.pipe(
  ofType(APP_ACTIONS.SET_CURRENT_MOVIE),
  debounceTime(200),
  mergeMap(({ payload }) => from(fetchMovie(payload))
    .pipe(
      map((res) => setCurrentMovieFromServer(res.data)),
      catchError(of({ type: 'searchError' })),
    )),
);
