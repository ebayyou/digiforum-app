import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPreloadProcess } from './states/isPreload/action';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import ThreadAddedPage from './pages/ThreadAddedPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import LeaderboardsPage from './pages/LeaderBoardsPage';
import NotfoundPage from './pages/404Page';

const App = () => {
  const { isPreload = false } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/threadAdded" element={<ThreadAddedPage />} />
        <Route path="/threadDetail/:threadId" element={<ThreadDetailPage />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default App;
