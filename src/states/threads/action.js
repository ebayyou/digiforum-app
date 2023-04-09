/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_THREAD_SUCCESS: 'ADD_THREAD_REQUEST',
  ADD_THREAD_REQUEST: 'ADD_THREAD_REQUEST',
  ADD_THREAD_FAILED: 'ADD_THREAD_REQUEST',
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

function addThreadRequest({ title, body, category }) {
  return {
    type: ActionType.ADD_THREAD_REQUEST,
    payload: {
      title,
      body,
      category,
    },
  };
}

function addThreadSuccess(thread) {
  return {
    type: ActionType.ADD_THREAD_SUCCESS,
    payload: {
      thread,
    },
  };
}

function addThreadFailed(message) {
  return {
    type: ActionType.ADD_THREAD_FAILED,
    payload: {
      message,
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

function upVoteThreadActionCreator({ threadId, userVoteId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userVoteId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userVoteId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
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
    dispatch(upVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));
    threads.find((thread) => thread.id === threadId).downVotesBy.includes(authUser.id) &&
      dispatch(downVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));

    try {
      await Api.neutralizeVoteThread(threadId);
      !threads.find((thread) => thread.id === threadId).upVotesBy.includes(authUser.id) &&
        (await Api.upVoteThread(threadId));
    } catch (error) {
      dispatch(upVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));
      dispatch(downVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));

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
    dispatch(downVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));
    threads.find((thread) => thread.id === threadId).upVotesBy.includes(authUser.id) &&
      dispatch(upVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));

    try {
      await Api.neutralizeVoteThread(threadId);
      !threads.find((thread) => thread.id === threadId).downVotesBy.includes(authUser.id) &&
        (await Api.downVoteThread(threadId));
    } catch (error) {
      dispatch(downVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));
      dispatch(upVoteThreadActionCreator({ threadId, userVoteId: authUser.id }));

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
  addThreadSuccess,
  addThreadRequest,
  addThreadFailed,
};
