import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ThreadList from '../components/thread/ThreadList';
import UserProfile from '../components/user/UserProfile';
import { asyncPopulateUserAndThreads } from '../states/shared/action';

const ProfilePage = () => {
  const { profileId } = useParams();
  const { threads = [], savedThreads = [], authUser = {} } = useSelector((state) => state);
  const [userThreads, setUserThreads] = useState([]);
  const [typeTabs, setTypeTabs] = useState(profileId === 'saved' ? 'saved' : 'yourThreads');
  const dispatch = useDispatch();

  const findUserthreads = () => threads.filter((thread) => thread.ownerId === authUser.id);

  const combineUserAndThreads = () => {
    const userThread = findUserthreads();
    return userThread.map((thread) => ({ ...thread, user: authUser }));
  };

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());

    if (authUser) {
      const filterThreads = combineUserAndThreads();
      if (profileId === 'saved') setUserThreads(savedThreads);
      else setUserThreads(filterThreads);
    }
  }, [dispatch, profileId]);

  const handleTabsThreads = (type) => {
    if (type === 'yourThreads') {
      const filterThreads = combineUserAndThreads();
      setUserThreads(filterThreads);
      setTypeTabs('yourThreads');
    } else {
      setUserThreads(savedThreads);
      setTypeTabs('saved');
    }
  };

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
                  onClick={() => handleTabsThreads('yourThreads')}
                >
                  Threads
                </button>
                <div className={`${typeTabs === 'yourThreads' && 'active__button'}`} />
              </div>
              <div className="tabs">
                <button
                  className="tabs__button"
                  type="button"
                  onClick={() => handleTabsThreads('saved')}
                >
                  Saved
                </button>
                <div className={`${typeTabs === 'saved' && 'active__button'}`} />
              </div>
            </div>

            {userThreads.length !== 0 ? (
              <ThreadList
                userThread
                threads={userThreads}
              />
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

export default ProfilePage;
