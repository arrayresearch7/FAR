import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white shadow-xl p-6 space-y-5">
      <button
        className="w-full rounded-xl py-3 font-bold text-white
        bg-gradient-to-r from-indigo-500 to-cyan-500 shadow"
        onClick={() => navigate("/submissions")}
      >
        Make a Submission
      </button>

      <input
        type="text"
        placeholder="Search publications"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      <button
        onClick={() => onSearch(query)}
        className="w-full rounded-xl py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
