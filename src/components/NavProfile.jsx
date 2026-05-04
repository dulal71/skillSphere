'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const NavProfile = () => {
    const logOut = async()=>{
       await authClient.signOut()
    }
 
     const { data:session  } = authClient.useSession()
const user = session?.user
console.log(user);
    return (
        <>
            {user &&<div className="flex gap-2 items-center">
       <Avatar>
        <Avatar.Image alt="John Doe"
         src={user?.image}
         referrerPolicy="no-referrer"
         />
        <Avatar.Fallback>{user?.name.charAt(0)} </Avatar.Fallback>
      </Avatar>
         <Link className="bg-black text-white font-bold btn rounded-full shadow" href={'/login'} onClick={logOut}>LogOut</Link>
        </div> 
    } 
    {
        !user && <Link className="bg-black text-white font-bold btn rounded-full shadow" href={'/login'}>LogIn</Link>
    }
        </>
    );
};

export default NavProfile;