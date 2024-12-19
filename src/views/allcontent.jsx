import React, { useState } from "react";
import { FaFileAlt, FaPencilAlt, FaTh, FaBars } from "react-icons/fa"; // React icons

const AllContent = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // Mock data for demonstration
  const contentData = [
    {
      id: 1,
      title: "MNNLR Team",
      owner: "mnnlrstack.mnnlr.manish",
      description: "Team Contacts Name Phone Number DOB Email github Account...",
      updated: "November 14, 2024",
    },
    {
      id: 2,
      title: "Untitled database (2)",
      owner: "rohit kumar",
      description: "Database of user info, records, etc.",
      updated: "November 13, 2024",
    },
    {
      id: 3,
      title: "Template - Product requirements",
      owner: "ANAND",
      description: "Product requirements document for upcoming release.",
      updated: "November 6, 2024",
    },
    {
      id: 4,
      title: "Click Up Database Design",
      owner: "Rushi Panchal",
      description: "Design for database collections and structure.",
      updated: "November 6, 2024",
    }, {
      id: 5,
      title: "Click Up Database Design",
      owner: "Rushi Panchal",
      description: "Design for database collections and structure.",
      updated: "November 6, 2024",
    }
    // More cards can be added here...
  ];

  // Filtering content based on search and filter
  const filteredData = contentData.filter((item) => {
    return (
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "All" || filter === "Worked on") // Add more filters if needed
    );
  });

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="text-blue-600 text-lg">
          space name
        </span>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">All content</h1>
        <div className="flex items-center mb-4">
          <div className="relative">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full p-2 pl-8 text-xs border bg-gray-50 focus:outline-none focus:border-blue-500"
                placeholder="Search by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="mt-2 flex space-x-2">
              <button
                className={`text-xs hover:bg-blue-200 rounded-full px-3 py-2 border  ${filter === "All" ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300  bg-gray-200'}`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`text-xs hover:bg-blue-200 rounded-full px-3 py-2 border ${filter === "Worked on" ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-200'}`}
                onClick={() => setFilter("Worked on")}
              >
                Worked on
              </button>
              <button
                className={`text-xs hover:bg-blue-200 rounded-full px-4 py-2 border ${filter === "Starred" ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-200'}`}
                onClick={() => setFilter("Starred")}
              >
                Starred
              </button>
            </div>
          </div>



          {/* Sort and View Controls */}
          <div className="ml-auto flex items-center space-x-2 ">
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option>Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Relative</option>
            </select>

            {/* View Mode Toggle */}
            <button
              className="p-2 bg-gray-200 rounded-md"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? <FaBars /> : <FaTh />}
            </button>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div
        className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 " : "space-y-4"
          }`}
      >
        {filteredData.map((card) => (
          <div key={card.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-2">
              <FaFileAlt className="text-blue-600" />
              <h2 className="ml-2 font-semibold">{card.title}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Owned by <a href="#" className="text-blue-600">{card.owner}</a>
            </p>
            <p className="text-sm text-gray-600 mb-2">{card.description}</p>
            <p className="text-sm text-gray-500">Updated {card.updated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContent;
