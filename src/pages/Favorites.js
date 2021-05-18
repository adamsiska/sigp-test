/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { isEmpty } from 'ramda';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavoriteMovies } from '../actions/specificActions/commonActions';

export const Favorites = () => {
  const { favoriteMovies } = useSelector(state => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(favoriteMovies)) dispatch(setFavoriteMovies());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid, grid-cols-1 grid-rows-2 md:m-20">
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-xl leading-6 font-medium text-gray-900">Your favorite movies</h3>
      </div>
      <div className="bg-white flex mt-10">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 focus:outline-none lg:mx-40">
              <ul id="list" className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 ">
                {favoriteMovies.length > 0 ? favoriteMovies.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:bg-gray-100"
                    onClick={() => dispatch(setCurrentMovie(movie.imdbID))}
                  >
                    <Link to={movie.imdbID}>
                    <div className="flex-1 flex flex-col p-8 ">
                      <img className="h-60 flex-shrink-0 mx-auto bg-black " src={movie.Poster} alt="movie" />
                      <h3 className="mt-6 text-gray-900 text-xl font-medium">{movie.Title}</h3>
                      <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Year</dt>
                        <dd className="mt-3">
                          <span className="px-2 py-1 text-green-800 text-xl font-medium bg-green-100 rounded-full">
                            {movie.Year}
                          </span>
                        </dd>
                      </dl>
                    </div>
                    </Link>
                  </li>
                )) : null}
              </ul>
          </main>
        </div>
      </div>
    </div>
  );
};
