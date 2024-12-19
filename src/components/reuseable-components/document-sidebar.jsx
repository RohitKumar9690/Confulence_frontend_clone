import React, { useState } from 'react';
import { FaThLarge, FaCalendarAlt, FaCog, FaChevronDown, FaChevronRight, FaFileAlt, FaPlus, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Sidebar = () => {
  // State for toggling sidebar and dropdowns
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);  // New state for Content section

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleShortcuts = () => setIsShortcutsOpen(!isShortcutsOpen);
  const toggleBlogs = () => setIsBlogsOpen(!isBlogsOpen);
  const toggleContent = () => setIsContentOpen(!isContentOpen);  // Function to toggle content section

  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-width duration-300 fixed left-0 top-10 bg-white shadow-md h-full overflow-auto p-4`}>
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <span className="font-bold text-lg">Software Development</span>
      </div>

      {/* Sidebar Menu */}
      <div className="mb-2 space-y-1">
        <div className="flex items-center mb-2  hover:bg-blue-200 rounded px-1 py-1.5 text-sm">
          <FaThLarge className="text-blue-500 mr-2 " />
          <Link className=" text-blue-500" to="/allcontent">All content</Link>
        </div>
        <div className="flex items-center mb-2  hover:bg-blue-200 rounded px-1 py-1.5 text-sm">
          <FaCalendarAlt className="text-gray-600 mr-2" />
          <span>Calendars</span>
        </div>
        <div className="flex items-center mb-2  hover:bg-blue-200 rounded px-1 py-1.5 text-sm">
          <FaCog className="text-gray-600 mr-2 " />
          <span>Space settings</span>
        </div>
      </div>

      {/* Shortcuts Dropdown */}
      <div className="mb-2 ">
        <div className="flex items-center mb-2 cursor-pointer hover:bg-gray-100 rounded px-1 py-1.5 text-sm font-semibold" onClick={toggleShortcuts}>
          <MdOutlineKeyboardArrowRight size={18} className={`text-gray-600 mr-2 rounded border border-gray-400  ${isShortcutsOpen ? 'rotate-90' : ''} transition-transform`} />
          <span>Shortcuts</span>
        </div>
        {isShortcutsOpen && (
          <div className="ml-6 space-y-2">
            <div className="flex items-center mt-1 hover:bg-gray-200 px-1.5 py-1 rounded">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span>Content name</span>
            </div>
            <div className="flex items-center  hover:bg-gray-200 px-1.5 py-1 rounded">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span>Content name</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Dropdown */}
      <div className="mb-1">
        <div className="flex items-center  cursor-pointer  hover:bg-gray-100 rounded px-1 py-1.5 text-sm font-semibold" onClick={toggleContent}>
          <MdOutlineKeyboardArrowRight size={18} className={`text-gray-600 mr-2 rounded border border-gray-400  ${isContentOpen ? 'rotate-90' : ''} transition-transform`} />
          <span>Content</span>
          <FaFilter className="text-gray-600 ml-auto mr-2" />
          <FaPlus className="text-gray-600" />
        </div>
        {isContentOpen && (
          <div className="ml-6 space-y-2">
              <div className="relative mt-2">
          <div className="absolute inset-y-2 left-0 flex items-center pl-2 pointer-events-none">
            <svg className="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full p-2 pl-8 border bg-gray-50 focus:outline-none text-xs"
            placeholder="Search by title..."
        
          />
        </div>
            <div className="flex items-center mb-2 hover:bg-gray-200 px-1.5 py-1 rounded">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span>File 1</span>
            </div>
            <div className="flex items-center hover:bg-gray-200 px-1.5 py-1 rounded">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span>File 2</span>
            </div>
          </div>
        )}
      </div>

      {/* Blogs Dropdown */}
      <div className="mb-4">
        <div className="flex items-center mb-2 cursor-pointer  hover:bg-gray-100 rounded px-1 py-1.5 text-sm font-semibold" onClick={toggleBlogs}>
          <MdOutlineKeyboardArrowRight size={18} className={`text-gray-600 mr-2 rounded border border-gray-400 ${isBlogsOpen ? 'rotate-90' : ''} transition-transform`} />
          <span>Blogs</span>
          <FaPlus className="text-gray-600 ml-auto" />
        </div>
        {isBlogsOpen && (
          <div className="ml-6 text-gray-600">
            No blogs in this space
          </div>
        )}
      </div>

      {/* Invite Button */}
      {/* <div className="mt-4">
        <button className="w-full py-2 bg-gray-100 text-blue-600 rounded-md">Invite people</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
