import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import ProfileBar from './ProfileBar';

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
