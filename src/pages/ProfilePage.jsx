import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import { combineUserAndThreads, findUser } from '../utils/utilsForUserThread';
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
    users = [],
    saveThreads = [],
    authUser = {},
  } = useSelector((state) => state);
  const [userThreads, setUserThreads] = useState([]);
  const [getUser, setGetUser] = useState({});
  const [typeTabs, setTypeTabs] = useState(profileId === 'saved' ? 'saved' : 'yourThreads');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());

    if (userId) {
      const user = findUser(users, userId);
      setGetUser(user);

      const filterThreads = combineUserAndThreads(threads, userId, user);
      setUserThreads(filterThreads);
      return;
    }

    if (authUser) {
      const filterThreads = combineUserAndThreads(threads, authUser.id, authUser);
      setGetUser(authUser);

      if (profileId === 'saved') setUserThreads(saveThreads);
      else setUserThreads(filterThreads);
    }
  }, [dispatch, profileId, userId, getUser, authUser]);

  const handlerTabsThreads = (type) => {
    if (type === 'yourThreads') {
      if (userId) {
        const user = findUser(users, userId);
        const filterThreads = combineUserAndThreads(threads, userId, user);
        setUserThreads(filterThreads);
        setTypeTabs('yourThreads');
        return;
      }

      const filterThreads = combineUserAndThreads(threads, authUser.id, authUser);
      setUserThreads(filterThreads);
      setTypeTabs('yourThreads');
    } else if (type === 'saved') {
      setUserThreads(saveThreads);
      setTypeTabs('saved');
    }
  };

  return (
    <section className="profile__container">
      {authUser || userId ? (
        <ErrorBoundary
          fallback={
            <ProfileLock
              message="something went wrong"
              path="/"
              btnMsg="Go to HomePage"
            />
          }
        >
          <UserProfile user={getUser} />

          <div className="profile__wrapper">
            <UserProfileTabs>
              <UserTabs
                handlerTabsThreads={handlerTabsThreads}
                typeTabs={typeTabs}
                nameBtn="Threads"
                path="yourThreads"
              />
              {!userId ? (
                <UserTabs
                  handlerTabsThreads={handlerTabsThreads}
                  typeTabs={typeTabs}
                  nameBtn="Saved"
                  path="saved"
                />
              ) : null}
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
        </ErrorBoundary>
      ) : (
        <ProfileLock
          message="You must login first, if you want to see the profile page"
          path="/login"
          btnMsg="Login"
        />
      )}
    </section>
  );
};

export default ProfilePage;
