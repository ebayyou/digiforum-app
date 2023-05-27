import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import Api from '../utils/Api';
import ThreadItemOwner from '../components/thread/children/thread/ThreadItemOwner';
import SearchElement from '../components/SearchElement';

const UsersPage = () => {
  const { users } = useSelector((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('username');
  const [keyword, setKeyword] = useState(username || '');

  const usersList = users.slice(22, 28);
  const foundUsers = username ? Api.searchUser(users, username) : usersList;

  const changeValueSearchParams = (event) => {
    setSearchParams({ username: event.target.value });
    setKeyword(event.target.value);
  };

  const userItem = foundUsers.map((user) => (
    <Link
      to="/"
      className="user__item"
      key={user.id}
    >
      <ThreadItemOwner
        key={user.id}
        owner={user}
        createdAt={user.id}
        category="front-end"
      />
    </Link>
  ));

  return (
    <section className="Layout__children">
      <div className="UsersPage">
        <SearchElement
          keyword={keyword}
          changeValueSearchParams={changeValueSearchParams}
        />

        <div className="UsersPage__list">
          {foundUsers.length !== 0 ? (
            userItem
          ) : (
            <div className="user__notfound">
              <h3>
                No result found for
                <span>{`"${username}"`}</span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
