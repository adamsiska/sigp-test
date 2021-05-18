import { includes, map } from 'ramda';
import { createSelector } from 'reselect';

export const isFavorite = createSelector(
  (state) => state.app,
  ({ favoriteMovies, selectedMovie }) => includes(
    selectedMovie.imdbID, map((m) => m.imdbID, favoriteMovies),
  ),
);
