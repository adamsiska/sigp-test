import { includes, map } from 'ramda';
import { createSelector } from 'reselect';

export const isFavorite = createSelector(
  (state:IReducers) => state.app,
  ({ favoriteMovies, selectedMovie }) => includes(
    selectedMovie.imdbID, map((m: IFullMovie) => m.imdbID, favoriteMovies),
  ),
);
