'use client'

import UpdateProfile from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client"
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaUserEdit } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
const Profile = () => {
  const { data: session, isLoading } = authClient.useSession();

const user = session?.user

  console.log(user);
    return (
      <div className="max-w-80 p-8 h-[50vh]  bg-linear-to-tr from-blue-500/80 to-indigo-300  shadow mx-auto my-24 text-center rounded-2xl flex justify-center items-center ">
      
      <div className="flex flex-col items-center gap-3 px-5 py-8 rounded-2xl 
backdrop-blur-md bg-linear-to-b from-white/90 to-white/50 shadow-lg">

  
      <Avatar>
        <Avatar.Image width={200} height={200} alt={user?.name} src={user?.image} />
        <Avatar.Fallback >{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

  <h3 className="text-lg font-semibold  text-gray-800">
  Name :  <span className="italic"> {session?.user?.name}</span>
  </h3>

  <p className="text-sm text-gray-600">
   Email : {session?.user?.email}
  </p>
  <div className="flex items-center gap-4">
    <FaFacebook size={30}></FaFacebook>
    <FaInstagram  size={30}></FaInstagram>
    <LiaLinkedin  size={30}></LiaLinkedin>
  </div>
<UpdateProfile></UpdateProfile>
</div>
       
    </div>
  );
};

export default Profile;