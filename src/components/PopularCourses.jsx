import { getData } from "@/lib/fetchingData";
import Courses from "./Courses";


const PopularCourses =async () => {
    const allCourses =await  getData()
    
    return (
        <div className= "max-w-7xl mx-auto grid grid-cols-4 gap-2 my-10">
       
         <div className="col-span-1 bg-white p-4 rounded-md ">
   <h2 className="text-3xl font-bold mb-4"> New Courses</h2>
<div className="space-y-3">

    <div className="border p-3 rounded-md hover:shadow transition">
      <h3 className="font-semibold">React & Next.js Mastery</h3>
      <p className="text-sm text-gray-500">Intermediate • 18 hours</p>
    </div>

    <div className="border p-3 rounded-md hover:shadow transition">
      <h3 className="font-semibold">JavaScript Fundamentals</h3>
      <p className="text-sm text-gray-500">Beginner • 12 hours</p>
    </div>

    <div className="border p-3 rounded-md hover:shadow transition">
      <h3 className="font-semibold">Complete web Development Bootcamp</h3>
      <p className="text-sm text-gray-500">Intermediate • 16 hours</p>
    </div>

  </div>

</div>  
         <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
         {
            allCourses.splice(0,3).map(courses=> <Courses key={courses.id} courses={courses}></Courses>)
         }   
            </div> 
      
      
      
        </div>
    );
};

export default PopularCourses;