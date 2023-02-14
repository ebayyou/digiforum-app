import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import Api from '../../utils/Api';

function asyncPopulateUserAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await Api.getAllUsers();
      const threads = await Api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncPopulateUserAndThreads };
