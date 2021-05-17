import React, { useState } from 'react';
import { SearchIcon, CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../actions/specificActions/commonActions';

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('22');

  const positions = [
    {
      id: 1,
      title: 'Back End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 2,
      title: 'Front End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 3,
      title: 'User Interface Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      closeDate: '2020-01-14',
      closeDateFull: 'January 14, 2020',
    },
  ];

  const handleSearch = () => dispatch(searchMovie(searchInput));
  // console.log(searchInput);
  const handleSearchEnterPress = (e) => (e.code === 13
    ? handleSearch()
    : null
  );

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      {/* Content area */}
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
                      onChange={(e) => setSearchInput(e.target.value)}
                      value={searchInput}
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="search"
                    />
                    <input
                      name="search"
                      id="search"
                      onChange={(e) => setSearchInput(e.target.value)}
                      value={searchInput}
                      className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                      placeholder="Search films"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
              <button
                onKeyPress={handleSearchEnterPress}
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

        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="bg-white shadow lg:m-28 lg:mt-14 overflow-hidden sm:rounded-md sm:mt-14">
            <ul className="divide-y divide-gray-200">
              {positions.map((position) => (
                <li key={position.id}>
                  <a href="/" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">{position.title}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {position.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            {position.department}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            {position.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <p>
                            Closing on
                            {' '}
                            <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
