import PropTypes from 'prop-types';

const UserTabs = ({ handlerTabsThreads, typeTabs, nameBtn, path }) => {
  return (
    <div className="tabs">
      <button
        type="button"
        className="tabs__button"
        onClick={() => handlerTabsThreads(path)}
      >
        {nameBtn}
      </button>
      <div className={`${typeTabs === path && 'active__button'}`} />
    </div>
  );
};

UserTabs.propTypes = {
  handlerTabsThreads: PropTypes.func.isRequired,
  typeTabs: PropTypes.string.isRequired,
  nameBtn: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default UserTabs;
