"use client";
import {Check} from "@gravity-ui/icons";
import { useForm } from "react-hook-form"
import {Button, Checkbox, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
const SignUp = () => {
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
      const onSubmit =async (data) => {
  
   const { user, error } = await authClient.signUp.email({
    name: data.name, 
    email: data.email, // required
    password: data.password, // required
    image: data.image,
   
});
if(error){
  toast.error('This User already exists')  
  }else{
     toast.success('Sign Up successfully') 
     redirect('/') 
  }
}  
const googleSignIn=async()=>{
   const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
}

const githubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

    return (
        <div className=" max-w-4xl my-28 mx-auto flex justify-center items-center">
                   <div className="space-y-6">
                   <h2 className="text-center font-semibold text-2xl ">Sign up with email</h2>
             
       <form  onSubmit={handleSubmit(onSubmit)}>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
       
       <label className="label text-black">Full Name</label>
         <input type="text" className="input "
           {...register("name", { 
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters"
    }
  })}
     placeholder="Enter Your Name" />
    {errors.name && (
  <span className="text-red-500">{errors.name.message}</span>
)} 
       
    <label className="label text-black">Image URL</label>      
   <input
  type="url"
  className="input"
  {...register("image", {
    required: "Image URL is required",
  })}
  placeholder="Image url"
/>

{errors.image && (
  <span className="text-red-500">{errors.image.message}</span>
)}
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
         <input type="password" className="input text-black text-md"
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
         <div className="divider">Other sign In options</div>
       <div className=" flex justify-center items-center gap-2">
          <div onClick={googleSignIn} className=" btn btn-outline  rounded-md p-2"><FaGoogle size={30}/></div>
          <div onClick={githubSignIn}  className=" btn btn-outline  rounded-md p-2"><FaGithub size={30}/></div>
          
       </div>
               </div>
               </div>
                
    );
};

export default SignUp;