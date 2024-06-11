import React from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import ResumeScan from './component/ResumeScan';
import File from './component/File'

const App = () => {
  return (
   <>
      <Header />
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <ResumeScan />
      </div>
      <div className='flex-1 flex flex-col'>
      <File />
      </div>
    </div>
   </>
  );
};

export default App;