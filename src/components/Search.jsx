import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Make a Submission Button */}
      <div className="p-4">
        <button
          className="w-full inline-flex justify-center items-center rounded-full px-4 py-3 text-base font-bold bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
          onClick={() => navigate('/submissions')}
        >
          Make a Submission
        </button>
      </div>

      {/* Search Input */}
      <div className="p-4 border-t border-gray-200">
        <input
          id="searchAfl"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-3 text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        <button
          type="button"
          className="w-full mt-3 inline-flex justify-center items-center rounded-full px-4 py-3 text-base font-bold bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white transition-all duration-200 ease-in-out transform hover:scale-105"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Journal Info */}
      <div className="p-4 border-t border-gray-200 text-sm text-gray-700">
        <p className="font-bold text-base text-purple-900 mb-2">Applied Finance Letters</p>
        <p className="mt-1">Print ISSN: 2253-5799</p>
        <p>Online ISSN: 2253-5802</p>
        <p className="mt-3"></p>

        <a
          //href="https://x.com/AUTACFR"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold underline transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124-4.092-.205-7.725-2.164-10.158-5.144-.425.729-.667 1.577-.667 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.386 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.377 4.6 3.416-1.68 1.318-3.809 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.695 1.8-1.562 2.46-2.549z"/>
          </svg>
          
        </a>
      </div>

      {/* Logo Images */}
      <div className="p-4 border-t border-gray-200">
        <img src= className="w-full h-auto object-contain" />
      </div>
      <div className="p-4 border-t border-gray-200">
        <a href="https://abdc.edu.au/abdc-journal-quality-list/" target="_blank" rel="noopener noreferrer">
          <img src="/Logo-1.svg" alt="ABDC Journal Quality List" className="w-full h-auto object-contain" />
        </a>
      </div>
    </div>
  );
};

export default Search;
