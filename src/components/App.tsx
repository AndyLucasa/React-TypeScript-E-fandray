import React from 'react';
import '../styles/App.css';
import Home from './Home';
import SideBar from './SideBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Meeting from './Meeting';
import AppBar from './AppBar'

function App() {
  return (
    <div className="App w-screen ">
      <div className="grid grid-cols-14 h-screen">
        <Router>
          <div className="SideBar col-span-1 bg-gray-800 border-r border-gray-700 hidden md:block sticky z-10 ">
            <SideBar />
          </div>
          
          <div className="MeetContainer overscroll-auto col-span-full md:col-span-13 bg-gray-800 grid grid-rows-12 md:grid-rows-9 md:h-screen">
            <div className="row-span-1">
                <AppBar />
            </div>
            <Route path="/" exact component={Home}/>
            <Route path="/meeting" exact component={Meeting}/>
          </div>
        </Router>
        

        
      </div>
    </div>
  );
}

export default App;
