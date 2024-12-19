import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecentDocsHomepage = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('all');

  // Sample data for each tab
  const allDocs = [
    {
      title: 'Untitled database (2)',
      date: '33 seconds ago',
      category: 'Software Development',
    },
    // Add more document items here
  ];

  const workedOnDocs = [
    {
      title: 'MNNLR',
      date: 'November 29, 2024',
      category: 'Software Development',
    },
    // Add more worked-on documents here
  ];

  const createdByMeDocs = [
    {
      title: 'MNNLR Team',
      date: 'November 28, 2024',
      category: 'Software Development',
    },
    // Add more created-by-me documents here
  ];

  const starredDocs = [
    {
      title: 'ServiceNow',
      date: 'November 11, 2024',
      category: 'Software Development',
    },
    // Add more starred documents here
  ];

  const draftsDocs = [
    {
      title: 'Template - Decision documentation',
      date: 'November 5, 2024',
      category: 'Software Development',
    },
    // Add more draft documents here
  ];

  // Function to render the documents based on the active tab
  const renderDocs = () => {
    switch (activeTab) {
      case 'all':
        return allDocs.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              alt="Document icon"
              className="w-6 h-6"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fS1fo7vKKMtvQ06rjzedeqxfcyxZxFBNGsFjHDcRJ02MjoQfE.jpg"
              width="24"
            />
            <div>
              <p className="text-blue-600">{doc.title}</p>
              <p className="text-sm text-gray-500">{doc.category} • {doc.date}</p>
            </div>
          </div>
        ));
      case 'workedOn':
        return workedOnDocs.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              alt="Document icon"
              className="w-6 h-6"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fS1fo7vKKMtvQ06rjzedeqxfcyxZxFBNGsFjHDcRJ02MjoQfE.jpg"
              width="24"
            />
            <div>
              <p className="text-blue-600">{doc.title}</p>
              <p className="text-sm text-gray-500">{doc.category} • {doc.date}</p>
            </div>
          </div>
        ));
      case 'createdByMe':
        return createdByMeDocs.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              alt="Document icon"
              className="w-6 h-6"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fS1fo7vKKMtvQ06rjzedeqxfcyxZxFBNGsFjHDcRJ02MjoQfE.jpg"
              width="24"
            />
            <div>
              <p className="text-blue-600">{doc.title}</p>
              <p className="text-sm text-gray-500">{doc.category} • {doc.date}</p>
            </div>
          </div>
        ));
      case 'starred':
        return starredDocs.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              alt="Document icon"
              className="w-6 h-6"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fS1fo7vKKMtvQ06rjzedeqxfcyxZxFBNGsFjHDcRJ02MjoQfE.jpg"
              width="24"
            />
            <div>
              <p className="text-blue-600">{doc.title}</p>
              <p className="text-sm text-gray-500">{doc.category} • {doc.date}</p>
            </div>
          </div>
        ));
      case 'drafts':
        return draftsDocs.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              alt="Document icon"
              className="w-6 h-6"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fS1fo7vKKMtvQ06rjzedeqxfcyxZxFBNGsFjHDcRJ02MjoQfE.jpg"
              width="24"
            />
            <div>
              <p className="text-blue-600">{doc.title}</p>
              <p className="text-sm text-gray-500">{doc.category} • {doc.date}</p>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex space-x-4 border-b-2 mb-4">
        {/* Tabs */}
        <a
          className={`font-semibold ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          href="#"
          onClick={() => setActiveTab('all')}
        >
          All
        </a>
        <a
          className={`font-semibold ${activeTab === 'workedOn' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          href="#"
          onClick={() => setActiveTab('workedOn')}
        >
          Worked on
        </a>
        <a
          className={`font-semibold ${activeTab === 'createdByMe' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          href="#"
          onClick={() => setActiveTab('createdByMe')}
        >
          Created by me
        </a>
        <a
          className={`font-semibold ${activeTab === 'starred' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          href="#"
          onClick={() => setActiveTab('starred')}
        >
          Starred
        </a>
        <a
          className={`font-semibold ${activeTab === 'drafts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          href="#"
          onClick={() => setActiveTab('drafts')}
        >
          Drafts
        </a>
      </div>

      {/* Filter input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="filter">
          Filter by title
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            id="filter"
            name="filter"
            placeholder="Search"
            type="text"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Render Documents */}
      <div className="mb-4 overflow-y-auto">{renderDocs()}</div>   
    </div>

  );
};

export default RecentDocsHomepage;
