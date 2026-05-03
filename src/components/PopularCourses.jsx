import { getData } from "@/lib/fetchingData";
import Courses from "./Courses";
import CourseSlider from "./CourseSlider";


const PopularCourses =async () => {
    const allCourses =await  getData()
    console.log(allCourses);
    return (
        <div className= "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 my-14">
       
         <div className="col-span-1  bg-white p-4 rounded-md ">
   <h2 className="text-3xl italic font-bold mb-4"> New Courses</h2>
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
         <div className="col-span-3 w-full p-3">
         <CourseSlider allCourses={allCourses}></CourseSlider> 
            </div> 
      
      
      
        </div>
    );
};

export default PopularCourses;