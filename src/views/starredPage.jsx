import React from 'react';
import { ReactComponent as Logo } from '../svg-icons/read.svg';

const StarredPage = () => {
  return (
  <div>
     <h2 className='ml-5 mt-5 font-semibold text-sm'>Starred</h2>
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='flex justify-center mb-4'>
        <Logo className="w-40 h-40" aria-label="Read Icon" />
      </div>
      <h1 className='text-xl font-bold mb-2'>You haven’t starred any pages yet</h1>
      <p className='text-center'>
        Get back to pages that are important to you by marking them. You won’t get any notifications about pages you star.
      </p>
    </div>
    </div>
  );
}

export default StarredPage;