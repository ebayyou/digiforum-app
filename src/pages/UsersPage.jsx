/* eslint-disable jsx-a11y/label-has-associated-control */
import { SearchStatus } from 'iconsax-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadItemOwner from '../components/thread/children/thread/ThreadItemOwner';

const UsersPage = () => {
  const { users } = useSelector((state) => state);
  const usersList = users.slice(501, 507);

  return (
    <section className="Layout__children">
      <div className="UsersPage">
        <div className="input__group">
          <label htmlFor="search__user">
            <SearchStatus
              size="28"
              color="#d1caff"
            />
          </label>
          <input
            className="input__search"
            id="search__user"
            type="search"
            placeholder="Find people speech in here..."
          />
        </div>

        <div className="UsersPage__list">
          {usersList.map((user) => (
            <Link
              to="/"
              className="user__item"
            >
              <ThreadItemOwner
                key={user.id}
                owner={user}
                createdAt={user.id}
                category="front-end"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
