/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMovie } from '../actions/specificActions/commonActions';

export const MovieList = ({ movies }: TMovieListProps) => {
  const dispatch = useDispatch();
  return (

    <main className="flex-1 focus:outline-none lg:mx-40 mt-10">
    <ul id="list" className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 ">
      {movies.length > 0 ? movies.map(({ Poster, Title, Year, imdbID }:IMovie) => (
        <li
          key={imdbID}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:bg-gray-100"
          onClick={() => dispatch(setCurrentMovie(imdbID))}
        >
          <Link to={imdbID}>
          <div className="flex-1 flex flex-col p-8 ">
            <img className="h-60 flex-shrink-0 mx-auto bg-black " src={Poster} alt="movie" />
            <h3 className="mt-6 text-gray-900 text-xl font-medium">{Title}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Year</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xl font-medium bg-green-100 rounded-full">
                  {Year}
                </span>
              </dd>
            </dl>
          </div>
          </Link>
        </li>
      )) : null}
    </ul>
    </main>
  );
};
