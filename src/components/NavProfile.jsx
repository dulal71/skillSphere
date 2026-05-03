'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
const NavProfile = () => {
    const logOut = async()=>{
       await authClient.signOut()
    }
 
     const { 
          data: session, 
            } = authClient.useSession()
              const imageSrc = session?.user?.image || '/profile.jpg' 
    return (
        <>
            {
      session?<div className="flex gap-2 items-center">
        <Image src={imageSrc} width={60} height={60} className="rounded-full" alt="image"></Image>
         <Link className="bg-black text-white font-bold btn rounded-full shadow" href={'/login'} onClick={logOut}>LogOut</Link>
        </div> : <Link className="bg-black text-white font-bold btn rounded-full shadow" href={'/login'}>LogIn</Link>
    } 
        </>
    );
};

export default NavProfile;