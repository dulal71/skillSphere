import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-[70vh] flex justify-center items-center'>
         <FadeLoader></FadeLoader> 
        </div>
    );
};

export default loading;