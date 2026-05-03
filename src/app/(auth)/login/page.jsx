"use client";
import { useForm } from "react-hook-form"
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
const LogIn = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
      const onSubmit =async (data) => {
const { user, error } = await authClient.signIn.email({
 email: data.email, // required
    password: data.password, // required
})
   if(error){
toast.error('log in falied')
   }else{
toast.success('log in successfully')
redirect('/')
   }
  
  };
    return (
        <div className=" max-w-4xl my-28 mx-auto flex justify-center items-center">
            <div className="space-y-6">
            <h2 className="text-center font-semibold text-2xl ">LogIn with email</h2>
      
<form onSubmit={handleSubmit(onSubmit)}>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


 
  <label className="label text-black">Email</label>
  <input type="email"
   className="input"
    {...register("email", { required: true,
         pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Give a valid email"
    }
     })}
    placeholder="Email" />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

  <label className="label text-black">Password</label>
  <input type="password"
   className="input text-black text-md"
    {...register("password", { required: true ,
  minLength: {
      value: 6,
      message: "Password must be at least 6 characters"
    }
        
    })}
    placeholder="Password" />
  {errors.password && <span className="text-red-500">{errors.password.message}</span>}
  <button className="btn btn-neutral mt-4">Continue</button>
</fieldset>
</form>
  <div className="divider">Other log In options</div>
<div className=" flex justify-center items-center gap-2">
   <div className=" btn btn-outline  rounded-md p-2"><FaGoogle size={30}/></div>
   <div  className=" btn btn-outline  rounded-md p-2"><FaGithub size={30}/></div>
   
</div>

<p className="text-center">Don't have an account?<Link href={'/signup'} className="text-red-500">Sign Up Now</Link> </p>
        </div>
        </div>
        
    );
};

export default LogIn;