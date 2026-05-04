'use client'
import { useState } from "react";


const SearchBar = ({allCourses,setAllCourses}) => {
    const [search ,setSearch]=useState('')
   const handleSearch=()=>{
    console.log(search); 
    const filterCourses=allCourses.filter(courses =>courses.title.toLowerCase().includes(search.toLowerCase()) )
   setAllCourses(filterCourses)
  }
   
   
    return (
        <div className="max-w-96 mx-auto flex items-center border rounded-full overflow-hidden shadow-sm">
  
  <input
    type="text"
    placeholder="Search courses..."
    onChange={(e)=>setSearch(e.target.value)}
    className="flex-1 px-4 py-2 outline-none"
  />

  <button onClick={handleSearch} className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">
    Search
  </button>

</div>
    );
};

export default SearchBar;