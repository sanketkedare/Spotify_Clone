import React from 'react'
import SideBar from './SideBar/SideBar'
import PlayBar from './PlayBar.jsx/PlayBar'
import Navbar from '../NavBar/Navbar';
import AuthNavbar from '../NavBar/AuthNavbar';
import { useState } from 'react';

const Home = () => {
  const [user ,setuser] = useState(false);
  return (
    <div className="flex">
      <div>
      <SideBar/>
      <PlayBar/>
      Home Component
      </div>
      
      <div className="flex ml-8 w-[60%]">
      <Navbar/>
      {
        user ? Navbar : AuthNavbar
      }
      </div>
    </div>
  )
}

export default Home
