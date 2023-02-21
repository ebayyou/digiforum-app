import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncReceiveLeaderboars } from './states/leaderboard/action';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import ThreadAddedPage from './pages/ThreadAddedPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import LeaderboardsPage from './pages/LeaderBoardsPage';
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
            path="/threadAdded"
            element={<ThreadAddedPage />}
          />
          <Route
            path="/threadDetail/:threadId"
            element={<ThreadDetailPage />}
          />
          <Route
            path="/leaderboards"
            element={<LeaderboardsPage />}
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
