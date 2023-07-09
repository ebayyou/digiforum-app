import logoBrand from '../../../assets/images/brand/digiforum-main.svg';

const SidebarHeader = () => {
  return (
    <header className="sidebar__headers">
      <img
        className="headers__img"
        src={logoBrand}
        alt="logo"
      />
      <div className="headers__name">
        <h4>DigiForum.io</h4>
        <p>Platform Discussion</p>
      </div>
    </header>
  );
};

export default SidebarHeader;
