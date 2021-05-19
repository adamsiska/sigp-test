import { isEmpty } from 'ramda';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFavoriteMovies } from '../actions/specificActions/commonActions';
import { MovieList } from '../components/MovieList';

export const Favorites = () => {
  const { favoriteMovies } = useSelector((state:IReducers) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isEmpty(favoriteMovies)) dispatch(setFavoriteMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoHomeClick = () => history.push('/');

  return (
    <div>
      <button
        onClick={handleGoHomeClick}
        type="button"
        className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Go home
      </button>
      <div className="grid, grid-cols-1 grid-rows-2 md:m-20">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-xl leading-6 font-medium text-gray-900">Your favorite movies</h3>
        </div>
        <div className="bg-white flex mt-10">
          <div className="flex-1 flex flex-col">
            <MovieList movies={favoriteMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};
