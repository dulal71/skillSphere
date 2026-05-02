import { inter } from "@/app/layout";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from '@/assets/avater.jpeg'
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
    return (

        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 h-20">
        <div className=" max-w-7xl mx-auto navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink href={'/'}>Home</NavLink></li>
       <li><NavLink href={'/courses'}>Courses</NavLink></li>
       <li><NavLink href={'/profile'}>Profile</NavLink></li>
      </ul>
    </div>
    <Link href={'/'} className={`text-black italic font-bold text-2xl ${inter.className} flex items-center gap-2`}><FaGraduationCap size={30}/>SkillSphere</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 <li><NavLink href={'/'}>Home</NavLink></li>
       <li><NavLink href={'/courses'}>Courses<RiArrowDropDownLine /></NavLink></li>
       <li><NavLink href={'/profile'}>Profile</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
   <Image src={logo} width={40} height={40} className="rounded-full" alt="image"></Image>
    <Link className="bg-black text-white font-bold btn rounded-full shadow" href={'/login'}>Login</Link>
  </div>
</div>
       </div>
    );
};

export default Navbar;