import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserProfile from '../components/user/UserProfile';
import UserThreads from '../components/user/UserThread';

const Profile = () => {
  const { threads = [], authUser } = useSelector((state) => state);
  const [userThreads, setUserThreads] = useState([]);

  if (authUser) {
    const userThread = threads.filter((thread) => thread.ownerId === authUser.id);

    const threadsAndUser = userThread.map((thread) => ({
      ...thread,
      user: authUser,
    }));

    setUserThreads(threadsAndUser);
  }

  return (
    <section className="profile__container">
      {authUser ? (
        <>
          <UserProfile user={authUser} />

          <div className="profile__wrapper">
            <div className="profile__tabs">
              <div className="tabs">
                <button
                  className="tabs__button"
                  type="button"
                >
                  Threads
                </button>
                <div className="active__button" />
              </div>
              <div className="tabs">
                <button
                  className="tabs__button"
                  type="button"
                >
                  Saved
                </button>
                <div className="" />
              </div>
            </div>

            {threads ? (
              <UserThreads threads={userThreads} />
            ) : (
              <div className="profile__thread__empty">nothing thread</div>
            )}
          </div>
        </>
      ) : (
        <div className="profile__container-false">
          <span>You want to see your profile?</span>
          <Link
            className="link-to-login"
            to="/login"
          >
            Must be login
          </Link>
        </div>
      )}
    </section>
  );
};

export default Profile;
