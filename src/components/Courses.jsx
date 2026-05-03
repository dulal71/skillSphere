import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
const Courses = ({courses}) => {
    console.log(courses);
    const {title,instructor,image,rating,id
}=courses
    return (
        <div className=" card bg-base-100 w-full  shadow-sm ">
  <figure>
   <Image src={image} width={300} height={60}
    
   alt={title}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{instructor}</p>
    <div className="card-actions justify-between items-center">
        <div className='flex items-center gap-1 px-4 border w-20'><FaStar color='gold' />
        <p>{rating}</p></div>
<Link href={`/coursesDetails/${id}`} className='text-red-700 flex items-center gap-2'>Details<FaChevronRight /></Link>
    </div>
  </div>
</div>
    );
};

export default Courses;