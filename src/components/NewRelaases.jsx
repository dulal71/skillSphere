import { getData } from '@/lib/fetchingData';

import Image from 'next/image';
import Link from 'next/link';
import { FiWatch } from 'react-icons/fi';


const NewRelaases = async() => {
  const allCourses =await  getData()   
    return (
        <div>
         {
            allCourses.slice(6, 12).map(courses=><div key={courses.id} className='my-24 max-w-7xl mx-auto space-y-3'>
                
                <div className='flex justify-between items-center bg-white shadow p-3'>
<div className='flex  gap-3'>

<Image src={courses.image} width={200}
height={200} alt={courses.title}></Image>
<div>
    <h3 className='font-semibold mb-2 text-xl'>{courses.title}</h3>
<h4 className='font-semibold'>{courses.instructor}</h4>
<div className='flex gap-5'>
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