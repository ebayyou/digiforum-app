import PropTypes from 'prop-types';
import { SearchStatus } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const SearchElement = ({ className, keyword, changeValueSearchParams, onHandlerSidebar }) => {
  const navigate = useNavigate();
  const onFocusSearchInput = () => {
    onHandlerSidebar();
    navigate('/users');
  };

  return (
    <label
      htmlFor="search__user"
      className={`${className === 'nav__search' ? 'nav__search' : 'search__element'} ${
        className === 'search__w-md' && 'search__w-md'
      }`}
    >
      <SearchStatus
        size="28"
        color="#d1caff"
      />
      <input
        className={`${className === 'nav__search' ? 'search__input' : 'input__search'}`}
        id="search__user"
        type="search"
        placeholder="Find people speech in here..."
        value={keyword}
        onFocus={onFocusSearchInput}
        onChange={changeValueSearchParams}
      />
    </label>
  );
};

SearchElement.defaultProps = {
  onHandlerSidebar: false,
};

SearchElement.propTypes = {
  className: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  changeValueSearchParams: PropTypes.func.isRequired,
  onHandlerSidebar: PropTypes.func,
};

export default SearchElement;
