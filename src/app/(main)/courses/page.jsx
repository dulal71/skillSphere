'use client'
import Courses from "@/components/Courses";
import SearchBar from "@/components/SearchBar";
import { getData } from "@/lib/fetchingData";
import { useEffect, useState } from "react";






const AllCourses = () => {
  const [allCourses,setAllCourses] = useState([])
  
    useEffect(()=>{
      const fetchData =async()=>{
        const data =await getData()
        setAllCourses(data)
      }
fetchData()
    },[])
  console.log(allCourses);  
    return (
        <div className="max-w-7xl mx-auto mt-24 mb-10 ">
 
<h1 className="text-[30px] text-center font-extrabold mb-4">All Courses</h1>
           <div> 
            <SearchBar allCourses={allCourses} setAllCourses={setAllCourses}></SearchBar>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {
                allCourses.map(courses=> <Courses key={courses.id} courses={courses}></Courses>)
              }  
            </div>
        </div>
    );
};

export default AllCourses;