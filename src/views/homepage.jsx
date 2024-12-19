import React, { useState } from 'react';
import PickupSection from "../components/reuseable-components/homepage-card";
import { GrGroup } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import DocsCard from "../components/reuseable-components/homepage-docsCards";

const Homepage = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('following');

    return (
        <>
            <section className="bg-white shadow-sm p-4 rounded mb-6">
                <h2 className="text-gray-600 font-bold mb-4">Pick up where you left off</h2>
                <div className="grid grid-cols-3 gap-3">
                    <PickupSection />
                    <PickupSection />
                    <PickupSection />
                    <PickupSection />
                </div>

                <div>
                    <h2 className="text-gray-600 font-bold text-sm mb-4 mt-4 ">
                        Discover what's happening
                    </h2>
                    <div className="flex items-center space-x-4 mb-4">
                        <button
                            className={`flex px-2 py-1 border border-solid items-center text-sm rounded-full ${activeTab === 'following' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-gray-100 text-gray-600 border-gray-400'}`}
                            onClick={() => setActiveTab('following')}
                        >
                            <GrGroup className="mr-1" /> Following
                        </button>
                        <button
                            className={`flex px-2 py-1 items-center text-sm border border-solid rounded-full ${activeTab === 'popular' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-gray-100 text-gray-600 border-gray-400'}`}
                            onClick={() => setActiveTab('popular')}
                        >
                            <IoIosTrendingUp className="mr-1" /> Popular
                        </button>
                        <button
                            className={`flex px-2 py-1 items-center text-sm border border-solid rounded-full ${activeTab === 'announcements' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-gray-100 text-gray-600 border-gray-400'}`}
                            onClick={() => setActiveTab('announcements')}
                        >
                            <GrAnnounce className="mr-1" /> Announcements
                        </button>
                    </div>
                </div>

                {/* Conditionally render content based on active tab */}
                <div className="p-4 rounded w-full">
                    {activeTab === 'following' && (
                        <>
                            <DocsCard />
                            <DocsCard />
                            <DocsCard />
                            <DocsCard />
                        </>
                    )}

                    {activeTab === 'popular' && (
                        <>
                            <DocsCard />
                            <DocsCard />
                           
                        </>
                    )}

                    {activeTab === 'announcements' && (
                        <>
                            <DocsCard />
                            
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Homepage;
