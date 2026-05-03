
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Banner = () => {
    return (
<div className="max-w-7xl mx-auto   h-[70vh] bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat mt-24 p-5 relative">
<div className="bg-white absolute p-4 space-y-3 rounded-md top-40">
   <h1 className="text-black font-semibold text-xl md:text-3xl">
      Learn from Industry <br /> Experts
    </h1>

    <p>
      Get access to 26,000 courses from real-world <br /> experts with one subscription
    </p>

    <Link href="/courses" className="text-black btn btn-outline flex items-center gap-2">
      Our Courses <FaChevronRight />
    </Link>
</div>
</div>

  

       
    );
};

export default Banner;