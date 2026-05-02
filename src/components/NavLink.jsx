'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href,children}) => {
    const pathname= usePathname()
    const active = pathname===href
    return (
    <Link
  href={href}
  className={`
    transition-all duration-300 ease-in-out
    px-3 py-2 rounded-md
    ${active ? 'bg-green-900 text-white font-bold  text-[20px]' : 'text-gray-700 hover:bg-green-100 text-[20px]'}
  `}
>
  {children}
</Link>
    );
};

export default NavLink;