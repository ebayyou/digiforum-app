import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import createSagaMiddleware from 'redux-saga';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboard/reducer';
import trendsReducer from './trends/reducer';
import savedThreadReducer from './savedThread/reducer';
import menuStatusReducer from './menuStatus/reducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
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
    menuStatus: menuStatusReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
