import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboard/reducer';
import sidebarstatusReducer from './sidebarStatus/reducer';
import trendsReducer from './trends/reducer';
import savedThreadReducer from './savedThread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    savedThreads: savedThreadReducer,
    trend: trendsReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
    sidebarStatus: sidebarstatusReducer,
  },
});

export default store;
