/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator(threadId, userVoteId) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userVoteId,
    },
  };
}

function downVoteThreadActionCreator(threadId, userVoteId) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userVoteId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await Api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threads } = getState();
    dispatch(upVoteThreadActionCreator(threadId, authUser.id));
    threads.forEach(async (thread) => {
      if (thread.id === threadId) {
        if (thread.downVotesBy.includes(authUser.id)) await Api.downVoteThread(threadId);
      }
    });

    try {
      await Api.neutralizeVoteThread(threadId);
      threads.forEach(async (thread) => {
        if (!thread.upVotesBy.includes(authUser.id)) await Api.upVoteThread(threadId);
      });
    } catch (error) {
      dispatch(upVoteThreadActionCreator(threadId, authUser.id));
      dispatch(downVoteThreadActionCreator(threadId, authUser.id));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threads } = getState();
    dispatch(downVoteThreadActionCreator(threadId, authUser.id));
    threads.forEach(async (thread) => {
      if (thread === threadId) {
        if (thread.upVotesBy.includes(authUser.id)) await Api.upVoteThread(threadId);
      }
    });

    try {
      await Api.neutralizeVoteThread(threadId);
      threads.forEach(async (thread) => {
        if (thread.id === threadId) {
          if (!thread.downVotesBy.includes(authUser.id)) await Api.downVoteThread(threadId);
        }
      });
    } catch (error) {
      dispatch(downVoteThreadActionCreator(threadId, authUser.id));
      dispatch(upVoteThreadActionCreator(threadId, authUser.id));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
};
