import Api from '../../utils/Api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboars() {
  return async (dispatch) => {
    try {
      const leaderboards = await Api.getLeaderboardsByUsers();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboars };
