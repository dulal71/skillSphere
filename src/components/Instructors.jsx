import Image from 'next/image';
import React from 'react';

const Instructors = () => {
    return (
       
       <div className='max-w-7xl mx-auto my-14'>
  
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800">
    Meet Our <span className="text-red-700">Top</span> Instructors
  </h2>

  <div className="grid md:grid-cols-4 gap-4 px-4 md:px-0">

    {/* Instructor 1 */}
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition text-center">
      <Image
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        width={400}
        height={100}
        alt="instructor"
        className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
      />
      <h3 className="font-semibold">John Doe</h3>
      <p className="text-sm text-gray-500">Full Stack Developer</p>
    </div>

    {/* Instructor 2 */}
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition text-center">
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        width={400}
        height={100}
        alt="instructor"
        className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
      />
      <h3 className="font-semibold">Jane Smith</h3>
      <p className="text-sm text-gray-500">React Expert</p>
    </div>

    {/* Instructor 3 */}
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition text-center">
      <Image
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        width={400}
        height={100}
        alt="instructor"
        className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
      />
      <h3 className="font-semibold">Michael Lee</h3>
      <p className="text-sm text-gray-500">UI/UX Designer</p>
    </div>

    {/* Instructor 4 */}
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition text-center">
      <Image
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        width={400}
        height={100}
        alt="instructor"
        className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
      />
      <h3 className="font-semibold">Sarah Wilson</h3>
      <p className="text-sm text-gray-500">Backend Engineer</p>
    </div>

  </div>
</div> 
    );
};

export default Instructors;