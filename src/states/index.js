import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboard/reducer';
import trendsReducer from './trends/reducer';
import saveThreadsReducer from './saveThreads/reducer';
import menuStatusReducer from './menuStatus/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    saveThreads: saveThreadsReducer,
    trend: trendsReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
    menuStatus: menuStatusReducer,
  },
});

export default store;
