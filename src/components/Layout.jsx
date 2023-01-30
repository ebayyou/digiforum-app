import PropTypes from 'prop-types';
import Navbar from './Navbar';
import SideBar from './SideBar';
import ProfileBar from './ProfileBar';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <header>
        <Navbar />
      </header>

      <main>
        <SideBar />
        {children}
        <ProfileBar />
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
