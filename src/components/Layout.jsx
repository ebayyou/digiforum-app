import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navigation/Navigation';
import SideBar from './sidebar/SideBar';
import ProfileBar from './RightBar/RightBar';

const Layout = () => {
  return (
    <div className="Layout">
      <header>
        <Navbar />
      </header>

      <main>
        <SideBar />
        <Outlet />
        <ProfileBar />
      </main>
    </div>
  );
};

export default Layout;
