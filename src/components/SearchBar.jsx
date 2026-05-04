import React from 'react';

const SearchBar = () => {
    return (
        <div className="max-w-96 mx-auto flex items-center border rounded-full overflow-hidden shadow-sm">
  
  <input
    type="text"
    placeholder="Search courses..."
    className="flex-1 px-4 py-2 outline-none"
  />

  <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">
    Search
  </button>

</div>
    );
};

export default SearchBar;