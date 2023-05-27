import PropTypes from 'prop-types';
import { SearchStatus } from 'iconsax-react';

const SearchElement = ({ className, keyword, changeValueSearchParams }) => {
  return (
    <label
      htmlFor="search__user"
      className={`search__element ${className}`}
    >
      <SearchStatus
        size="28"
        color="#d1caff"
      />
      <input
        className="input__search"
        id="search__user"
        type="search"
        placeholder="Find people speech in here..."
        value={keyword}
        onChange={changeValueSearchParams}
      />
    </label>
  );
};

SearchElement.propTypes = {
  className: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  changeValueSearchParams: PropTypes.func.isRequired,
};

export default SearchElement;
