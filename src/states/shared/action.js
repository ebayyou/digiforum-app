import Api from '../../utils/Api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUserAndThreads() {
  return async (dispatch) => {
    try {
      const users = await Api.getAllUsers();
      const threads = await Api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUserAndThreads };
