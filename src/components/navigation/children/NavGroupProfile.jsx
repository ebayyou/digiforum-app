import { ArrowSquareDown } from 'iconsax-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NavDropdownProfile from './NavDropdownProfile';

const NavGroupProfile = () => {
  const [isActive, setIsActive] = useState(false);
  const { authUser } = useSelector((state) => state);
  const onActiveDropdown = () => setIsActive((prevState) => !prevState);

  return (
    <div className="nav__group-profile">
      <div className="nav__profile">
        <img
          src={authUser.avatar}
          alt="logo brand"
        />

        <h5>{authUser.name}</h5>
      </div>

      <button
        type="button"
        className="nav__button-dropicon"
        onClick={onActiveDropdown}
      >
        <ArrowSquareDown
          className="dropicon"
          size="28"
          color="#DDD8D8"
          variant="Bold"
        />
      </button>

      <NavDropdownProfile
        isActive={isActive}
        onActiveDropdown={onActiveDropdown}
      />
    </div>
  );
};

export default NavGroupProfile;
