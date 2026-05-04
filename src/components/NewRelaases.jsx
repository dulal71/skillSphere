import { getData } from '@/lib/fetchingData';

import Image from 'next/image';
import Link from 'next/link';
import { FiWatch } from 'react-icons/fi';


const NewRelaases = async() => {
  const allCourses =await  getData()   
    return (
        <div>
                       <h2 className="text-3xl md:text-4xl font-extrabold text-center mt-10 mb-6 text-black">New Releases
</h2>
         {
            allCourses.slice(6, 12).map(courses=><div key={courses.id} className=' max-w-7xl mx-auto my-10'>
  
                <div className='flex flex-col gap-2 mb-2 md:gap-0 md:flex-row justify-between items-center bg-white shadow p-3 rounded-md transition-transform duration-500 hover:scale-105'>
<div className='flex  gap-3'>

<Image src={courses.image} width={200}
height={200} alt={courses.title}></Image>
<div>
    <h3 className='font-semibold mb-2 text-xl'>{courses.title}</h3>
<h4 className='font-semibold'>{courses.instructor}</h4>
<div className='flex gap-5 flex-col md:flex-row'>
    <p className='bg-amber-200 px-2 rounded-md'>{courses.level}</p>
<p className='flex items-center gap-2'><FiWatch size={20}></FiWatch>{courses.duration}</p>

</div>
</div>
</div>
<Link className='text-red-500' href={`/courses/${courses.id}`}>Details</Link>

                </div>
                
                
                
                
                
                 </div>)
         }   
        </div>
    );
};

export default NewRelaases;