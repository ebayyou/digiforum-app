import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';

const ActionType = {
  RECEIVE_USER: 'RECEIVE_USER',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      users,
    },
  };
}

function asyncRequestRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await Api.requestRegister({ name, email, password });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAllUsers() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await Api.getAllUsers();
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRequestRegisterUser, asyncAllUsers };
