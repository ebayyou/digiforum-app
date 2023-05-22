import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncReceiveLeaderboars } from './states/leaderboard/action';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ThreadsPage from './pages/ThreadsPage';
import ThreadAddedPage from './pages/ThreadAddedPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import ProfilePage from './pages/ProfilePage';
import CommunityPage from './pages/CommunityPage';
import LeaderboardsPage from './pages/LeaderBoardsPage';
import UsersPage from './pages/UsersPage';
import NotfoundPage from './pages/404Page';
import Loading from './components/Loading';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncReceiveLeaderboars());
  }, [dispatch]);

  return (
    <>
      <Loading />

      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/threads"
            element={<ThreadsPage />}
          />
          <Route
            path="/threads/:threadId"
            element={<ThreadDetailPage />}
          />
          <Route
            path="/threads/thread-added"
            element={<ThreadAddedPage />}
          />
          <Route
            path="/community"
            element={<CommunityPage />}
          />
          <Route
            path="/leaderboards"
            element={<LeaderboardsPage />}
          />
          <Route
            path="/users"
            element={<UsersPage />}
          />
          <Route
            path="/users/:userId"
            // user page
            element={<ProfilePage />}
          />
        </Route>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="*"
          element={<NotfoundPage />}
        />
      </Routes>
    </>
  );
};

export default App;
