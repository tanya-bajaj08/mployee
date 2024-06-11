import React from 'react';

const ResumeScan = () => {
  return (
    <div className="bg-gray-400 p-4">
      <div className="bg-white p-4 shadow rounded mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold">40%</div>
          <div className="text-red-600">Ohh No !! Needs improvement. Your resume just scored 14 out of 100. You need 21 points to reach orange zone at least.</div>
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <div className="mb-4">
          <div className="flex space-x-4">
            <button className="py-2 px-4 bg-yellow-500 rounded">Competencies</button>
            <button className="py-2 px-4 bg-gray-200 rounded">Information</button>
            <button className="py-2 px-4 bg-gray-200 rounded">Presentation</button>
            <button className="py-2 px-4 bg-gray-200 rounded">Personal Details</button>
          </div>
        </div>
        <div className="mb-4 w-[786px]">
          <div className="bg-red-100 p-4 rounded mb-2">
            <div className="font-bold text-red-600">Bullets</div>
            <div>We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it's not readable by ATS</div>
          </div>
          <div className="bg-red-100 p-4 rounded mb-2">
            <div className="font-bold text-red-600">Bullets</div>
            <div>We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it's not readable by ATS</div>
          </div>
          <div className="bg-green-100 p-4 rounded mb-2">
            <div className="font-bold text-green-600">Dates</div>
            <div>We could not detect any Dates. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it's not readable by ATS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScan;