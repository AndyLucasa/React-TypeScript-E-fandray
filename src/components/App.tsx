import React from 'react';
import '../styles/App.css';
import Home from './Home';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App w-screen ">
      <div className="grid grid-cols-14 h-screen">

        <div className="SideBar col-span-1 bg-gray-800 border-r border-gray-700 hidden md:block sticky z-10 ">
          <SideBar />
        </div>

        <div className="MeetContainer overscroll-auto col-span-full md:col-span-13 bg-gray-800 grid grid-rows-12 md:grid-rows-9 xl:h-screen">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
