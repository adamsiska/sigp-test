/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovies, fetchNextMovies, setCurrentMovie, setSearchInput } from '../actions/specificActions/commonActions';

export const Home = () => {
  const dispatch = useDispatch();
  const { movies, currentPage, searchInput } = useSelector((state) => state.app);

  const handleSearch = () => dispatch(searchMovies(searchInput));

  useEffect(() => {
    const list = document.getElementById('list');
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop
         && movies.length > 0) {
        dispatch(fetchNextMovies(searchInput, currentPage + 1));
      }
    });
  }, [handleSearch]);

  const handleSearchEnterPress = (e) => (e.charCode === 13
    ? handleSearch()
    : null);

  return (
    <div className="h-screen bg-white  flex">
      <div className="flex-1 flex flex-col">

        <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0 mt-10">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
            <div className="flex-1 flex justify-between px-4 md:px-0">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      name="search"
                      id="search"
                      onKeyPress={handleSearchEnterPress}
                      onChange={(e) => dispatch(setSearchInput(e.target.value))}
                      value={searchInput}
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="Search movies"
                    />
                    <input
                      name="search"
                      id="search"
                      onKeyPress={handleSearchEnterPress}
                      onChange={(e) => dispatch(setSearchInput(e.target.value))}
                      value={searchInput}
                      className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                      placeholder="Search movies"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={handleSearch}
                type="button"
                className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 focus:outline-none lg:mx-40">
          <ul id="list" className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 ">
            {movies.length > 0 ? movies.map((movie) => (
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
  );
};
