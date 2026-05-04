
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Banner = () => {
    return (

<div className="max-w-6xl mx-auto mt-24 relative flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16 rounded-2xl bg-gradient-to-br from-blue-500/80 via-indigo-500/70 to-purple-500/60 overflow-hidden">

  {/* left Content */}
  <div className="bg-white/40 backdrop-blur-md p-6 md:p-10 space-y-5 rounded-2xl shadow-lg max-w-lg">
    
    <h1 className="text-gray-900 font-bold text-2xl md:text-4xl leading-tight">
      Learn from Industry <br /> Experts
    </h1>

    <p className="text-gray-600">
      Get access to 26,000+ courses from real-world experts with one subscription
    </p>

    {/* Tooltip wrapper */}
    <div className="relative group w-fit">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Our Courses <FaChevronRight />
      </Link>

      {/* Tooltip */}
      <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
        Explore all available courses
      </span>
    </div>

  </div>

  {/* right content */}
  <div className="relative ">
    <Image
      src="/hero-image.jpg"
      width={450}
      height={300}
      alt="banner image"
      className="rounded-2xl shadow-xl object-cover"
    />

    {/* Image tooltip */}
    <span className="absolute top-5 left-7 md:top-1/2 -translate-y-1/2 md:-left-12 md:-translate-x-1/2 bg-white/90 text-gray-800 text-md px-5 py-4 rounded-md shadow">
  Learn visually with experts
</span>
  </div>

</div>
  

       
    );
};

export default Banner;