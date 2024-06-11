import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen p-4 w-[304px]">
      <div className="mb-4">
        <button className="bg-blue-500 w-full py-2 rounded">Resume Scan</button>
      </div>
      <div className="mb-4">
        <button className="bg-gray-700 w-full py-2 rounded">Scan my resume</button>
      </div>
      <div className="mb-4">Recent Scans</div>
      <div className="mb-4">Previous Scans</div>
      <div className="mb-4">Get Credits</div>
      <div className="absolute bottom-9 w-full">
        <div className="mb-2">Contact Us</div>
        <div className="mb-2">About Us</div>
        <div className="mb-2">Terms of Service</div>
        <div className="mb-2">Privacy Policy</div>
        <div className="bg-gray-600 w-[270px] py-2 rounded mt-2">Credits Available: 8510</div>
        <button className="bg-yellow-500 w-[270px] py-2 rounded mt-2 px-2">Buy More Credits</button>
      </div>
    </div>
  );
};

export default Sidebar;