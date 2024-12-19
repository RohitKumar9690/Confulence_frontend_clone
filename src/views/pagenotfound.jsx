import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <div className="text-6xl font-bold text-blue-600">
          <span>4</span><span>0</span><span className="text-red-600">4</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, but the page you are looking for does not exist, has been removed, name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:text-blue-700 underline">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
