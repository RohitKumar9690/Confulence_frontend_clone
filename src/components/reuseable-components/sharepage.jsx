import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';

function SharePage() {
  const [activeTab, setActiveTab] = useState('sharePage');

  return (
    <div className="flex items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Tab Header */}
        <div className="flex items-center mb-4">
          <h2
            className={` font-semibold mr-2 text-sm cursor-pointer ${activeTab === 'sharePage' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('sharePage')}
          >
            Share page
          </h2>
          <i className="fab fa-slack text-blue-600"></i>
          <span
            className={`text-blue-600 ml-1 text-sm cursor-pointer ${activeTab === 'shareInSlack' ? 'border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('shareInSlack')}
          >
            Share in Slack
          </span>
        </div>

        {/* Tab Content */}
        {activeTab === 'sharePage' ? (
          // Content for Share Page tab
          <>
            <p className="text-sm text-gray-600 mb-4">
              Required fields are marked with an asterisk <span className="text-red-500">*</span>
            </p>

            {/* Names Input */}
            <div className="mb-4">
              <label htmlFor="names" className="block text-sm font-medium text-gray-700">
                Names, teams, or groups <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="names"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g. Maria, Team Orange, group-one"
              />
              <p className="text-xs text-gray-500 mt-1">
                Recipients will see the name of the page and your message
              </p>
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (optional)
              </label>
              <textarea
                id="message"
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Anything they should know?"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button className="flex items-center text-blue-600 text-sm">
                <FaLink className='mr-1'/> Copy link
              </button>
              <button className="bg-blue-600 text-sm  text-white px-3 py-1 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Share
              </button>
            </div>
          </>
        ) : (
          // Content for Share in Slack tab
          <div className="text-center text-gray-500 mt-4">
            <p>Share your page in Slack here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SharePage;
