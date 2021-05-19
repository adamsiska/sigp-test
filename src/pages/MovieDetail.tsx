import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, omit, toPairs } from 'ramda';
import { addFavoriteMovie, removeFavoriteMovie, setFavoriteMovies } from '../actions/specificActions/commonActions';
import { isFavorite } from '../store/selectors';

export const MovieDetail = () => {
  const { selectedMovie, favoriteMovies } = useSelector((state:IReducers) => state.app);
  const history = useHistory();
  const [favorite, setFavorite] = useState(useSelector(isFavorite));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(favoriteMovies)) dispatch(setFavoriteMovies());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isEmpty(selectedMovie)) history.push('/');

  const { Title, Genre, imdbID, Poster, Ratings } = selectedMovie;
  const arrayOfAttr = toPairs(omit(['Poster', 'Ratings', 'imdbID', 'Response'], selectedMovie));

  const descriptions = (attr: Array<string>, index: number) => {
    const color = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
    return (attr[1] === 'N/A') ? null : (
        <div key={index} className={`${color} px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4`}>
          <dt className="text-sm font-medium text-gray-500">{attr[0]}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{attr[1]}</dd>
        </div>
    );
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    dispatch(!favorite
      ? addFavoriteMovie(selectedMovie)
      : removeFavoriteMovie(selectedMovie.imdbID));
  };

  return (
    <div key={imdbID} className="bg-gray-50 shadow overflow-hidden sm:rounded-lg lg:m-20 lg:mx-20 md:grid md:grid-cols-5">
      <div className="border-gray-200 border-r col-span-3">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex">
            <div>
              {Title}
            </div>
            <svg
              onClick={handleFavoriteClick}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer  ${favorite ? 'text-yellow-400' : 'text-gray-500'} ml-4`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{Genre}</p>
        </div>
        <div className="border-t border-gray-200">
          {arrayOfAttr.map((attr, index) => descriptions(attr, index))}
          <div className="bg-gray px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Ratings</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {Ratings?.map(({ Source, Value }) => (
                <p key={Value}>
                  {Source}
                  :
                  {' '}
                  <span className="ml-4">
                  {' '}
                  {Value}
                  </span>
                </p>
              ))}
            </dd>
          </div>
        </div>
      </div>
      <div className=" grid  justify-center col-span-2 w-full">
        <img src={Poster} alt="movie img" />
      </div>
    </div>
  );
};
