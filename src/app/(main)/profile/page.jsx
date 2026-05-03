'use client'

import { authClient } from "@/lib/auth-client"
import Image from "next/image";

const Profile = () => {
  const { data: session, isLoading } = authClient.useSession();

  const imageSrc = session?.user?.image || "/profile.jpg";

  
    return (
      <div className="max-w-80 p-8 h-[50vh] bg-white shadow mx-auto my-24 text-center rounded-2xl relative ">
       <div className="h-48 p-6 rounded-2xl bg-linear-to-tr from-blue-500/80 to-indigo-300  shadow-sm ">
<h3>Hi, {session?.user?.name}</h3>
<p>  Welcome back</p>
       </div>
      <div className="flex flex-col items-center gap-3 p-8 rounded-2xl  absolute top-40 left-15
backdrop-blur-md bg-linear-to-tr from-white/70 to-white/30 shadow-lg">

  <Image
    src={imageSrc}
    width={100}
    height={100}
    alt={session?.user?.name || "Profile"}
    className="rounded-full border-4 border-white shadow-md"
  />

  <h3 className="text-lg font-semibold italic text-gray-800">
    {session?.user?.name}
  </h3>

  <p className="text-sm text-gray-600">
    {session?.user?.email}
  </p>
<button className="btn bg-accent">Change Profile</button>
</div>
       
    </div>
  );
};

export default Profile;