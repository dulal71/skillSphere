import { getDataById } from "@/lib/fetchingData";
import { CloudGear } from "@gravity-ui/icons";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


const CoursesDetails = async ({params}) => {
   const {id} = await params
   console.log(id);
   const course = await getDataById(id)
   console.log(course);
    return (
      <div className="max-w-5xl h-screen mx-auto flex justify-center items-center mt-24 mb-6 md:mt-0">

  {/* Card */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2 gap-6">

    {/* Image */}
    <div className="relative w-full h-[300px] md:h-full">
      <Image
        src={course.image}
        fill
        className="object-cover"
        alt={course.title}
      />
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">

      <h1 className="text-3xl font-bold text-gray-900">
        {course.title}
      </h1>

      <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-full">
        {course.category}
      </span>

      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mt-4">
        <p><span className="font-medium text-gray-800">Instructor:</span > <span className="font-bold">{course.instructor}</span></p>
        <p><span className="font-medium text-gray-800">Duration:</span> {course.duration}</p>
        <p><span className="font-medium text-gray-800">Level:</span> <span className="bg-amber-500">{course.level}</span></p>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-lg"><FaStar></FaStar></span>
        <span className="font-semibold">{course.rating}</span>
      </div>

      <p className="text-gray-600 leading-relaxed mt-4">
        {course.description}
      </p>

      <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition">
        Enroll Now
      </button>


      <div className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Full course details
        </h2>

        <h3 className="font-medium text-gray-700">
          Course curriculum
        </h3>

        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
          <li>Introduction to course</li>
          <li>Basic fundamentals</li>
          <li>Real-world projects</li>
          <li>Final assignment</li>
        </ul>
      </div>

    </div>
  </div>

</div>
     
    );
};

export default CoursesDetails;