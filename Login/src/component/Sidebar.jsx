import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 w-100">
      <div className="mb-4">
        <button className="bg-blue-500 w-full py-2 rounded">Resume Scan</button>
      </div>
      <div className="mb-4">
        <button className="bg-gray-700 w-full py-2 rounded">Scan my resume</button>
      </div>
      <div className="mb-4">Recent Scans</div>
      <div className="mb-4">Previous Scans</div>
      <div className="mb-4">Get Credits</div>
      <div className="absolute bottom-4 w-full">
        <div className="mb-2">Contact Us</div>
        <div className="mb-2">About Us</div>
        <div className="mb-2">Terms of Service</div>
        <div className="mb-2">Privacy Policy</div>
        <div>Credits Available: 8510</div>
        <button className="bg-yellow-500  py-2 rounded mt-2">Buy More Credits</button>
      </div>
    </div>
  );
};

export default Sidebar;