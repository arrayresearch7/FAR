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
