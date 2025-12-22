import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-[#122d23] border border-gray-700 shadow-xl">
      
      {/* Make a Submission Button */}
      <div className="p-5 border-b border-gray-700">
        <button
          className="w-full inline-flex justify-center items-center rounded-full px-4 py-3 text-base font-bold bg-[#d4af37] hover:bg-[#c9a635] active:bg-[#bfa12f] text-[#0b1f17] transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
          onClick={() => navigate('/submissions')}
        >
          Make a Submission
        </button>
      </div>

      {/* Search Input */}
      <div className="p-5 border-b border-gray-700">
        <input
          id="searchAfl"
          type="text"
          placeholder="Search Journal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full px-4 py-3 text-base bg-[#0b1f17] text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all duration-200"
        />
        <button
          type="button"
          className="w-full mt-4 inline-flex justify-center items-center rounded-full px-4 py-3 text-base font-semibold bg-[#1f3a2e] hover:bg-[#254b3a] active:bg-[#2a5a45] text-gray-100 transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Journal Info */}
      <div className="p-5 border-b border-gray-700 text-sm text-gray-300">
        <p className="font-semibold text-base text-[#d4af37] mb-2">
          Applied Finance Insights
        </p>
        <p className="mt-1"></p>
        <p></p>
      </div>

      {/* ABDC Logo */}
      <div className="p-5">
        <a
          href="https://abdc.edu.au/abdc-journal-quality-list/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Logo-1.svg"
            alt="ABDC Journal Quality List"
            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Search;
