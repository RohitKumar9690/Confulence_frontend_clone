import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const TasksPage = () => {
  const [activeTab, setActiveTab] = useState('assigned'); // Default active tab
  const [filters, setFilters] = useState({
    dueDate: '',
    status: '',
    ongoing: false,
    creator: '',
    page: '',
    space: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample tasks data
  const tasks = [
    { id: 1, title: "Task 1", date: "2024-12-10", description: "Short task", status: "done", length: 5, creator: "John", space: "Team A", assignedTo: "John", createdBy: "Jane" },
    { id: 2, title: "Task 2", date: "2024-12-11", description: "A little longer task", status: "in-progress", length: 10, creator: "Jane", space: "Team B", assignedTo: "Doe", createdBy: "Jane" },
    { id: 3, title: "Task 3", date: "2024-11-30", description: "A very long task description that takes time to read", status: "on-hold", length: 30, creator: "Doe", space: "Team A", assignedTo: "Doe", createdBy: "John" },
  ];

  // Handle filter change
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  // Reset filters
  const clearFilters = () => {
    setFilters({
      dueDate: '',
      status: '',
      ongoing: false,
      creator: '',
      page: '',
      space: ''
    });
  };

  // Filter tasks based on the selected filters
  const filteredTasks = () => {
    return tasks.filter(task => {
      const matchesDueDate = filters.dueDate ? task.date === filters.dueDate : true;
      const matchesStatus = filters.status ? task.status === filters.status : true;
      const matchesOngoing = filters.ongoing ? task.length > 0 : true;
      const matchesCreator = filters.creator ? task.creator === filters.creator : true;
      const matchesPage = filters.page ? task.page === filters.page : true;
      const matchesSpace = filters.space ? task.space === filters.space : true;

      // Check if task matches the active tab filter
      if (activeTab === 'assigned') {
        return task.assignedTo === "John" && matchesDueDate && matchesStatus && matchesOngoing && matchesCreator && matchesPage && matchesSpace;
      } else if (activeTab === 'created') {
        return task.createdBy === "Jane" && matchesDueDate && matchesStatus && matchesOngoing && matchesCreator && matchesPage && matchesSpace;
      }
      
      return matchesDueDate && matchesStatus && matchesOngoing && matchesCreator && matchesPage && matchesSpace;
    });
  };

  // Function to render tasks
  const renderTasks = () => {
    return filteredTasks().map(task => (
      <div key={task.id} className="border border-gray-300 p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs text-gray-500">Date: {task.date} | Length: {task.length} mins | Status: {task.status} | Creator: {task.creator} | Space: {task.space}</p>
      </div>
    ));
  };


  return (
    <div className="w-full max-w-4xl p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Tasks</h1>

      {/* Tab buttons */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 text-sm rounded-full border ${activeTab === 'assigned' ? 'bg-blue-100 text-blue-600 border-blue-300' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
          onClick={() => setActiveTab('assigned')}
        >
          Assigned to me 
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-full border ${activeTab === 'created' ? 'bg-blue-100 text-blue-600 border-blue-300' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
          onClick={() => setActiveTab('created')}
        >
          Created by me 
        </button>
        <button
          className="px-4 py-2  text-sm bg-white text-blue-600 rounded-full border border-blue-300 flex items-center space-x-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle filter panel visibility
        >
<FaFilter/>          <span>Filters</span>
        </button>
      </div>

      {/* Filter panel */}
      {isFilterOpen && (
        <div className="absolute top-42 left-96 bg-white shadow-lg rounded-md w-72 p-4 border border-gray-300 z-20">
          <h3 className="font-semibold text-gray-800">Filter Tasks</h3>

          {/* Clear Filters Button */}
          <button
            className="text-sm text-blue-500 mt-2 mb-4"
            onClick={clearFilters}
          >
            Clear Filters
          </button>

          {/* Filter Options */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600">Due Date</label>
            <input
              type="date"
              value={filters.dueDate}
              onChange={(e) => handleFilterChange('dueDate', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select...</option>
              <option value="done">Done</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Ongoing</label>
            <input
              type="checkbox"
              checked={filters.ongoing}
              onChange={(e) => handleFilterChange('ongoing', e.target.checked)}
              className="mt-1 mr-2"
            />
            <span className="text-sm text-gray-600">Show ongoing tasks</span>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Creator</label>
            <input
              type="text"
              value={filters.creator}
              onChange={(e) => handleFilterChange('creator', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Search by creator"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Space</label>
            <input
              type="text"
              value={filters.space}
              onChange={(e) => handleFilterChange('space', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Search by space"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Page</label>
            <input
              type="text"
              value={filters.page}
              onChange={(e) => handleFilterChange('page', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Search by page"
            />
          </div>
        </div>
      )}

      {/* Render filtered tasks */}
      <div className="mt-6">
        {renderTasks()}
      </div>

      {/* If no tasks, show placeholder */}
      {filteredTasks().length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            alt="Illustration of a task list with a pen and checkmarks"
            className="w-48 h-48 mb-6"
            height="200"
            src="https://storage.googleapis.com/a1aa/image/07DK0JhMhwoEO1u59f3fEIKGKa9JMBnSz8zgtfZ62tiKVK0nA.jpg"
            width="200"
          />
          <p className="text-lg font-semibold text-gray-800">No tasks here</p>
          <p className="text-gray-500">No tasks here</p>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
