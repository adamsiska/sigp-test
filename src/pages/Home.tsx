import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { searchMovies, fetchNextMovies, setSearchInput } from '../actions/specificActions/commonActions';
import { MovieList } from '../components/MovieList';

export const Home = () => {
  const dispatch = useDispatch();
  const { movies, currentPage, searchInput } = useSelector((state:IReducers) => state.app);
  const history = useHistory();

  const handleSearch = () => dispatch(searchMovies(searchInput));

  // useEffect(() => {
  //   const list = document.getElementById('list');
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY + window.innerHeight === list?.clientHeight + list?.offsetTop
  //       && movies.length > 0) dispatch(fetchNextMovies(searchInput, currentPage + 1));
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [handleSearch]);

  const handleFavoritesClick = () => history.push('/favorites');
  const handleSearchEnterPress = (e:React.KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter'
    ? handleSearch()
    : null);

  return (
    <div className="h-screen bg-white  flex">
      <div className="flex-1 flex flex-col">
        <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0 mt-10">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
            <div className="flex-1 flex justify-between px-4 md:px-0">
            <button
              onClick={handleFavoritesClick}
              type="button"
              className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go to favorites
            </button>
              <div className="flex-1 flex ml-5">
                <form className="w-full flex md:ml-0">
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
                      onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(
                        setSearchInput(e.target.value),
                      )}
                      value={searchInput}
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="Search movies"
                    />
                    <input
                      name="search"
                      id="search"
                      onKeyPress={handleSearchEnterPress}
                      onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(
                        setSearchInput(e.target.value),
                      )}
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
        <InfiniteScroll
          pageStart={0}
          loadMore={() => dispatch(fetchNextMovies(searchInput, currentPage + 1))}
          hasMore
        >
          <MovieList movies={movies} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
