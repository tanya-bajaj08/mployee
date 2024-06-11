import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="flex space-x-4 ">
        <div className='mr-72'>Mployee me</div>
        <div className='text-amber-300'>Resume Scan</div>
        <div>Job Recommendation</div>
        <div>Resume Keywords</div>
        <div>Resume Services</div>
        <div>Career Blogs</div>
      </div>
      <div>Divyanshu</div>
    </div>
  );
};

export default Header;