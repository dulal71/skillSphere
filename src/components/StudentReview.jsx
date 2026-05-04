import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const StudentReview = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3 p-5'>
            {/* left-content */}
         <div>
            <Image src="/student.jpeg" width={1000} height={500} alt='student image'></Image>
            </div>  
          {/* right-content */} 
         <div className='space-y-3'>
           <h2 className='text-2xl md:text-4xl'>Interactive Online Learning <br />
           Key Features & Benefits
            </h2> 
            <p>Educate the ultimate destination for knowledge seekers and eduction alike. we are committed to transforming special eduction impact global channles wihtout standards compliant systems</p>
           <div className='flex justify-between items-center'>

            <p className='flex gap-3 items-center text-green-700'><FaCheck />Innovative Learning System</p>
            <p  className='flex gap-3 items-center text-green-700'><FaCheck />World Intelligent Learner</p>
           </div>
           <div className='flex justify-between items-center'>
<div>
 <span className='text-6xl font-bold text-blue-800'>30+</span>   
 <p className='text-gray-500'>Expert and Professional Instructor</p>
</div>
<div>
    <span className='text-6xl font-bold text-blue-800'>60+</span>
    <p className='text-gray-500'>Enrolled Students all over the world</p>
</div>

           </div>
           <button className='bg-blue-700 px-3 py-2 text-white rounded-3xl'>More About</button>
            </div>   
        </div>
    );
};

export default StudentReview;