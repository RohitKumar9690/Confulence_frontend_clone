import React, { useState } from 'react';
import { SiGoogledocs } from "react-icons/si";
import { CiViewList } from "react-icons/ci";
import { MdCalendarViewMonth } from "react-icons/md";  

const RecentPage = () => {

  const [activeTab, setActiveTab] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); 

  // Sample data for the table
  const documents = [
    { team: "MMNLR Team", department: "Software Development", visitedDate: "November 21, 2024" },
    { team: "Team Alpha", department: "Marketing", visitedDate: "November 20, 2024" },
    { team: "Team Beta", department: "Design", visitedDate: "November 18, 2024" },
    { team: "MMNLR Team", department: "HR", visitedDate: "November 17, 2024" },
  ];

  // Filter documents based on the active tab and search query
  const filteredDocuments = () => {
    let filteredDocs = documents;

    // Filter based on search query
    if (searchQuery) {
      filteredDocs = filteredDocs.filter(doc =>
        doc.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter based on active tab
    if (activeTab !== 'all') {
      filteredDocs = filteredDocs.filter(doc => {
        if (activeTab === 'worked-on') {
          return doc.department === "Software Development"; 
        } else if (activeTab === 'created-by-me') {
          return doc.team === "MMNLR Team"; 
        }
        return true;
      });
    }

    return filteredDocs;
  };

  return (
    <div className="flex-1 p-6 scrollable-content">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button className="text-gray-600 hover:text-gray-800 mr-4">
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-xs font-bold">Recent</h1>
        </div>
        <div className="flex items-center">
          <button className="text-gray-600 hover:text-gray-800 mr-4">
            <i className="fas fa-th-large"></i>
          </button>
          <button className="text-gray-600 hover:text-gray-800"></button>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <svg className="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full p-2 pl-8 text-sm border bg-gray-50 focus:outline-none"
            placeholder="Search Mockups, Logos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Tab buttons */}
        <div className='ml-2 flex items-center'>
          <button
            className={`text-gray-600 text-sm bg-gray-100 hover:bg-blue-200 rounded-full px-4 py-2 border ${activeTab === 'all' ? 'border-blue-300' : 'border-gray-300'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`text-gray-600 text-sm bg-gray-100 hover:bg-blue-200 rounded-full px-4 py-2 border ${activeTab === 'worked-on' ? 'border-blue-300' : 'border-gray-300'} ml-2`}
            onClick={() => setActiveTab('worked-on')}
          >
            Worked on
          </button>
          <button
            className={`text-gray-600 text-sm bg-gray-100 hover:bg-blue-200 rounded-full px-4 py-2 border ${activeTab === 'created-by-me' ? 'border-blue-300' : 'border-gray-300'} ml-2`}
            onClick={() => setActiveTab('created-by-me')}
          >
            Created by me
          </button>
        </div>
        <div className="ml-auto flex items-center">
          <button
            className={` text-sm ${viewMode === 'list' ? 'text-blue-600' : 'text-gray-700'} `}
            onClick={() => setViewMode('list')}
          >
            <CiViewList size={20} />
          </button>
          <button
            className={`ml-2 ${viewMode === 'grid' ? 'text-blue-600' : 'text-gray-700'} `}
            onClick={() => setViewMode('grid')}
          >
            <MdCalendarViewMonth size={20}/>
          </button>
        </div>
      </div>

      
      {/* Conditionally Render List or Grid View */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded shadow">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 text-left">Team</th>
                <th className="p-4 text-left">Department</th>
                <th className="p-4 text-left">Last Visited</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments().map((doc, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-4 flex items-center">
                    <SiGoogledocs size={20} className='mr-2 text-blue-500'/>
                    {doc.team}
                  </td>
                  <td className="p-4">{doc.department}</td>
                  <td className="p-4 text-gray-500">{doc.visitedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredDocuments().map((doc, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:bg-gray-100">
              <div className="flex items-center">
                <SiGoogledocs size={20} className='mr-2 text-blue-500'/>
                <span className="font-bold">{doc.team}</span>
              </div>
              <div className="text-sm text-gray-500">{doc.department}</div>
              <div className="text-sm text-gray-400">Visited on {doc.visitedDate}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentPage;
