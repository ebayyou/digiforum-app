import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/thread/ThreadList';
import UserProfile from '../components/user/UserProfile';
import NothingThread from '../components/errorBoundaries/NothingThread';
import ProfileLock from '../components/errorBoundaries/ProfileLock';
import UserProfileTabs from '../components/user/UserProfileTabs';
import UserTabs from '../components/user/children/UserTabs';

const ProfilePage = () => {
  const { profileId, userId } = useParams();
  const {
    threads = [],
    savedThreads = [],
    authUser = {},
    users = {},
  } = useSelector((state) => state);
  const [userThreads, setUserThreads] = useState([]);
  const [getUser, setGetUser] = useState({});
  const [typeTabs, setTypeTabs] = useState(profileId === 'saved' ? 'saved' : 'yourThreads');
  const dispatch = useDispatch();

  const findUserthreads = (id) => threads.filter((thread) => thread.ownerId === id);
  const findUser = (id) => users.find((user) => user.id === id);
  const combineUserAndThreads = (id, user) => {
    const userThread = findUserthreads(id);
    return userThread.map((thread) => ({ ...thread, user }));
  };

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());

    if (userId) {
      const user = findUser(userId);
      setGetUser(user);

      const filterThreads = combineUserAndThreads(userId, user);
      setUserThreads(filterThreads);
      return;
    }

    if (authUser) {
      const filterThreads = combineUserAndThreads(authUser.id, authUser);
      setGetUser(authUser);

      if (profileId === 'saved') setUserThreads(savedThreads);
      else setUserThreads(filterThreads);
    }
  }, [dispatch, profileId, userId]);

  const handlerTabsThreads = (type) => {
    if (type === 'yourThreads') {
      if (userId) {
        const user = findUser(userId);
        const filterThreads = combineUserAndThreads(userId, user);
        setUserThreads(filterThreads);
        setTypeTabs('yourThreads');
        return;
      }

      const filterThreads = combineUserAndThreads(authUser.id, authUser);
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
          <UserProfile user={getUser} />

          <div className="profile__wrapper">
            <UserProfileTabs>
              <UserTabs
                handlerTabsThreads={handlerTabsThreads}
                typeTabs={typeTabs}
                nameBtn="Threads"
                path="yourThreads"
              />
              <UserTabs
                handlerTabsThreads={handlerTabsThreads}
                typeTabs={typeTabs}
                nameBtn="Saved"
                path="saved"
              />
            </UserProfileTabs>

            {userThreads.length !== 0 ? (
              <ThreadList
                userThread
                threads={userThreads}
              />
            ) : (
              <NothingThread
                withButton
                errorMsg="You can create and save threads in the threads page"
              />
            )}
          </div>
        </>
      ) : (
        <ProfileLock />
      )}
    </section>
  );
};

export default ProfilePage;
