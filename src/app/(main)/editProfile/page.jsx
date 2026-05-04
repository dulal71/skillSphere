import React from 'react';

const EditProfile = () => {
    return (
     <div className='max-w-3xl mx-auto h-[70vh] mt-24 flex flex-col justify-center items-center'>
  <h1 className='text-4xl font-bold mb-6'>Edit Your Profile</h1>

  <fieldset className="border border-base-300 rounded-box w-full max-w-md p-6 space-y-4 bg-white shadow">
    
    <div>
      <label className="label text-lg text-black">Name</label>
      <input type="text" className="input w-full" placeholder="Update name" />
    </div>

    <div>
      <label className="label text-lg text-black">Image URL</label>
      <input type="url" className="input w-full" placeholder="Update image" />
    </div>

    <div>
      <label className="label text-lg text-black">Email</label>
      <input type="email" className="input w-full" placeholder="Email" />
    </div>

    <button className="btn btn-neutral w-full mt-2">Update Profile</button>

  </fieldset>
</div>
    );
};

export default EditProfile;