import React from 'react';

const End = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-800 h-screen flex justify-center items-center">
      <div className="bg-gray-600 text-center rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-white text-3xl font-bold mb-4">Thank you!!!</h1>
        <p className="text-gray-300 text-lg mb-6">Your interview has been completed</p>
        
        <div className="flex justify-center space-x-4">
          {/* Review Answers Button */}
          <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400">
            Review Answers
          </button>
          
          {/* Preview Report Button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Preview Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
