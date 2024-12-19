import React from 'react';

const DraftPage = () => {
  return (
    <div>
            <h2 className="ml-5 mt-5 font-semibold text-sm text-gray-600">Drafted</h2>
         <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col items-center justify-center p-4">
        {/* Optionally add a logo or icon here */}
        <div className="flex justify-center mb-4">
          {/* <Logo className="w-40 h-40" aria-label="Read Icon" /> */}
        </div>
        
        <h1 className="text-xl font-bold text-center text-gray-800 mb-2">You haven’t Drafted any pages yet</h1>
        
        <p className="text-center text-gray-600">
          Get back to pages that are important to you by marking them. You won’t get any notifications about pages you star.
        </p>
      </div>
    </div>
    </div>
 
  );
};

export default DraftPage;
