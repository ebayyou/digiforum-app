import PropTypes from 'prop-types';
import SearchElement from '../../SearchElement';

const SidebarWrapper = ({ onHandlerSidebar }) => {
  return (
    <div className="sidebar__Wrapper">
      <SearchElement
        onHandlerSidebar={onHandlerSidebar}
        changeValueSearchParams={() => {}}
        keyword="nothing work"
      />

      <div className="sidebar__box">
        <h3>Nothing</h3>
      </div>
    </div>
  );
};

SidebarWrapper.defaultProps = {
  onHandlerSidebar: false,
};

SidebarWrapper.propTypes = {
  onHandlerSidebar: PropTypes.func,
};

export default SidebarWrapper;
