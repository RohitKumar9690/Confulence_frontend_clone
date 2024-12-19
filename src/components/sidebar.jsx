import React, { useState } from "react";
import {FaStar, FaFileAlt, FaTasks, FaPlus, FaSlack } from "react-icons/fa";  // Importing icons from react-icons
import { GrHomeRounded } from "react-icons/gr";
import { WiTime3 } from "react-icons/wi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CgMicrosoft } from "react-icons/cg";

const Sidebar = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const navigate= useNavigate()
  return (
      <aside className="mt-5 ml-10 w-1/7 p-4 rounded fixed left-0 top-9">
        <nav className=" space-y-4">
          <Link className="flex items-center text-sm text-blue-600" to="/" >
            <GrHomeRounded className="mr-2" />
            Overview
            
          </Link>
          <Link className="flex items-center text-sm text-gray-600 hover:text-blue-600" to="/recents">
            <WiTime3 className="mr-2" />
            Recent
          </Link>
          <Link className="flex items-center text-sm text-gray-600 hover:text-blue-600" to='/starred-page'   activeClassName="text-blue-600 bg-gray-100" >
          
            <FaStar className="mr-2" />
            Starred
          </Link>
          <Link className="flex items-center text-sm text-gray-600 hover:text-blue-600" to="/drafts">
            <FaFileAlt className="mr-2" />
            Drafts
          </Link>
          <Link className="flex items-center text-sm text-gray-600 hover:text-blue-600" to="/tasks">
            <FaTasks className="mr-2" />
            Tasks
          </Link>
        </nav>

        <div className="mt-6">
          <div>
            <h2 className="flex text-gray-600 font-bold text-xs">Spaces
              <button className=" hover:bg-slate-300 ml-28 p-1 ">
                <FaPlus className="" size={12} />
              </button>
            </h2>
          </div>

          <a className="flex items-center hover:bg-gray-300 rounded-md text-xs text-gray-600 mt-2 py-1 px-2" href="#" onClick={()=>{navigate("/documentpage")}}>
            Software Development <GoStarFill size={15} className="ml-6" />
          </a>
        </div>

        <button className="fixed w-48 items-center text-xs bottom-14 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"  onClick={openModal}>
          Invite people
        </button>
        {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(9,30,66,0.49)] bg-opacity-0" >
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
    <div className="bg-white p-4 shadow-lg w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-4">
            Add people to Confluence
          </h2>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Names or emails
            <span className="text-red-500">
              *
            </span>
          </label>
          <input
            className="w-full text-sm border border-gray-300 rounded-sm p-2 mb-2 focus:outline-none focus:border-blue-500"
            id="email"
            placeholder="e.g., Maria, maria@company.com"
            type="text"
          />
          <p className="text-sm text-gray-500 mb-2">
            or add from
          </p>
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 bg-white border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FcGoogle size={25} className="mr-2" />
              Google
            </button>
            <button className="flex-1 bg-white border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FaSlack size={25} className="mr-2" />
              Slack
            </button>
            <button className="flex-1 bg-white border border-gray-300 rounded-md p-2 flex items-center justify-centerhover:bg-gray-100">
            <CgMicrosoft size={25} className="mr-2" />
              Microsoft
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            This site is protected by reCAPTCHA and the Google
            <a className="text-blue-600" href="#">
              Privacy Policy
            </a>
            and
            <a className="text-blue-600" href="#">
              Terms of Service
            </a>
            apply.
          </p>
          <div className="flex justify-end space-x-2">
            <button className="text-gray-700 text-sm rounded-sm hover:bg-gray-100 px-2" onClick={closeModal}>
              Cancel
            </button>
            <button className="bg-blue-600 text-sm text-white rounded-sm px-4 py-2">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
      )}
      </aside>
  );
};

export default Sidebar;
