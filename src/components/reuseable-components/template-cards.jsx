import React from 'react';
import { FaLink, FaStar } from 'react-icons/fa';

const TemplateCards = () => {
    return (
        <div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-2 justify-between">
                    {/* Image with responsive sizing */}
                    <img
                        alt="Meeting notes icon"
                        className="h-10 w-10 rounded-full mr-2"
                        src="https://storage.googleapis.com/a1aa/image/QBCoSLuLfoTFJSDI2I1griQIZGO3WxQQpGWyBgx5U9aFak7JA.jpg"
                    />
                    {/* Button container with responsive layout */}
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center hover:bg-gray-300 p-1.5 rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaLink />
                        </button>
                        <button className="flex items-center hover:bg-gray-300 p-1.5 rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaStar />
                        </button>
                    </div>
                </div>

                {/* Card title */}
                <h2 className="text-lg font-bold mt-3 text-center sm:text-left">
                    Meeting notes
                </h2>

                {/* Flex container with responsive spacing */}
                <div className="flex justify-between mt-10">
                    <p className="text-gray-600 mb-2 text-sm font-bold">Meetings</p>
                    {/* Button shown on hover with opacity transition */}
                    <button className="bg-blue-600 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Use
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateCards;
