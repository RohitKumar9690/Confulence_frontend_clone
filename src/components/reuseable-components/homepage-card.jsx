import React from "react";
import { SiGoogledocs } from "react-icons/si";  

const PickupSection = () => {
  return (
    <div className="border border-solid p-4 rounded-md shadow-sm bg-white">
      <div className="flex items-center">
        <SiGoogledocs size={30} className="mr-3 text-blue-500"/>
        <h3 className="text-blue-600 font-bold text-lg"> Team</h3> 
      </div>   
      <p className="text-gray-600 font-semibold text-xs ml-11 top-0">Software Development</p>
      <p className="text-gray-400 text-xs mt-1">Visited November 21, 2024</p>
    </div>
  );
};

export default PickupSection;
