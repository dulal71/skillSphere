import Courses from "@/components/Courses";


 const getCourses = async(search ='')=>{
    const res = await fetch(`http://localhost:5004/courses`)
    const data = await res.json()
    return data;
}
const AllCourses =async () => {
    const allCourses= await getCourses()
  console.log(allCourses);  
    return (
        <div className="max-w-7xl mx-auto mt-24">
            <h1 className="text-5xl font-extrabold text-center mt-10 bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
  All Courses
</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                allCourses.map(courses=> <Courses key={courses.id} courses={courses}></Courses>)
              }  
            </div>
        </div>
    );
};

export default AllCourses;