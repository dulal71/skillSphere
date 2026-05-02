import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';

const Courses = ({courses}) => {
    console.log(courses);
    const {title,instructor,image,rating
}=courses
    return (
        <div className=" card bg-base-100  shadow-sm ">
  <figure>
   <Image src={image} width={300} height={60} alt={title}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{instructor}</p>
    <div className="card-actions justify-end">
<Link href={"/"} className='text-red-700 flex items-center gap-2'>Details<FaChevronRight /></Link>
    </div>
  </div>
</div>
    );
};

export default Courses;