import React, { useState } from 'react';
import Navbar from '../components/navbar';
import TemplateCards from '../components/reuseable-components/template-cards';
import { FaArrowCircleDown, FaArrowCircleUp, FaSearch } from 'react-icons/fa';
import QuickStartButton from '../components/reuseable-components/quickStartButton';

const TemplatesPage = () => {
    const [IsopenArrow, SetIsopenArrow] = useState(false);

    const handleArrow = () => {
        SetIsopenArrow(!IsopenArrow);
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="px-4 py-8 m-3">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Templates</h1>
                    </div>
                    
                    {/* Button Group */}
                    <div className=" flex items-center space-x-2 m-4 md:flex flex-wrap">
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-sm p-2 mb-2 md:mb-1">
                            <FaSearch />
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            My Templates
                        </button>
                        <button className="flex-shrink-0 text-sm rounded-full py-1 px-2 bg-gray-200 text-gray-600 mb-2 md:mb-1">
                            Popular <span className="ml-1">15</span>
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Customer Support 9
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Design 16
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Documentation 27
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Finance 10
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Finance 10
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Finance 10
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Finance 10
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Human Resources 16
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            IT 18
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Legal 8
                        </button>
                        <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 mb-2 md:mb-1">
                            Marketing 20
                        </button>

                        {/* Arrow Button for Dropdown */}
                        {!IsopenArrow && (
                            <button
                                className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2"
                                onClick={handleArrow}
                            >
                                <FaArrowCircleDown />
                            </button>
                        )}

                        {/* Dropdown Menu */}
                        {IsopenArrow && (
                            <div className="flex items-center space-x-2 mt-2 mr-4 flex-wrap">
                                <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-1">
                                    Operations 13
                                </button>
                                <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-1">
                                    Personal 15
                                </button>
                                <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-1">
                                    Product Management 19
                                </button>
                                <button className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-1">
                                    Project Management 15
                                </button>
                                <button
                                    className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-1"
                                    onClick={() => console.log("clicked")}
                                >
                                    Recommended
                                </button>

                                {/* Close Dropdown Button */}
                                <button
                                    className="flex-shrink-0 text-sm bg-gray-200 text-gray-600 rounded-full py-1 px-2 m-2"
                                    onClick={handleArrow}
                                >
                                    <FaArrowCircleUp />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Template Count */}
                    <p className="text-gray-600 mb-4">
                        Displaying all <span className="font-bold">142</span> templates.
                    </p>

                    {/* Template Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <TemplateCards />
                        <TemplateCards />
                        <TemplateCards />
                        <TemplateCards />
                        <TemplateCards />
                        <TemplateCards />
                        <TemplateCards />
                    </div>
                </div>
            </div>
            <QuickStartButton />
        </div>
    );
};

export default TemplatesPage;
