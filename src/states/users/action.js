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
  return async () => {
    try {
      await Api.requestRegister({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRequestRegisterUser,
};
