import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_THREAD_COMMENT: 'COMMENT_THREAD',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL_COMMENT: 'UP_VOTE_THREAD_DETAIL_COMMENT',
  DOWN_VOTE_THREAD_DETAIL_COMMENT: 'DOWN_VOTE_THREAD_DETAIL_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteThreadDetailActionCreator(userVoteId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userVoteId,
    },
  };
}

function downVoteThreadDetailActionCreator(userVoteId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userVoteId,
    },
  };
}

function upVoteThreadDetailCommentActionCreator({ commentId, userVoteId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL_COMMENT,
    payload: {
      commentId,
      userVoteId,
    },
  };
}

function downVoteThreadDetailCommentActionCreator({ commentId, userVoteId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL_COMMENT,
    payload: {
      commentId,
      userVoteId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await Api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddThreadComment(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await Api.createCommentForThread(threadId, content);
      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();

    dispatch(upVoteThreadDetailActionCreator(authUser.id));
    threadDetail.downVotesBy.includes(authUser.id) &&
      dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      await Api.neutralizeVoteThread(threadId);
      !threadDetail.upVotesBy.includes(authUser.id) && (await Api.upVoteThread(threadId));
    } catch (error) {
      dispatch(upVoteThreadDetailActionCreator(authUser.id));
      dispatch(downVoteThreadDetailActionCreator(authUser.id));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToggleDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();

    dispatch(downVoteThreadDetailActionCreator(authUser.id));
    threadDetail.upVotesBy.includes(authUser.id) &&
      dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      await Api.neutralizeVoteThread(threadId);
      !threadDetail.downVotesBy.includes(authUser.id) && (await Api.downVoteThread(threadId));
    } catch (error) {
      dispatch(upVoteThreadDetailActionCreator(authUser.id));
      dispatch(downVoteThreadDetailActionCreator(authUser.id));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToggleUpVoteCommentThreadDetail({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));
    threadDetail.comments
      .find((comment) => comment.id === commentId)
      .downVotesBy.includes(authUser.id) &&
      dispatch(downVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));

    try {
      await Api.neutralizeVoteComment({ threadId, commentId });
      !threadDetail.comments
        .find((comment) => comment.id === commentId)
        .upVotesBy.includes(authUser.id) && (await Api.upVoteComment({ threadId, commentId }));
    } catch (error) {
      dispatch(upVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));
      dispatch(downVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToggleDownVoteCommentThreadDetail({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));
    threadDetail.comments
      .find((comment) => comment.id === commentId)
      .upVotesBy.includes(authUser.id) &&
      dispatch(upVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));

    try {
      await Api.neutralizeVoteComment({ threadId, commentId });
      !threadDetail.comments
        .find((comment) => comment.id === commentId)
        .downVotesBy.includes(authUser.id) && (await Api.downVoteComment({ threadId, commentId }));
    } catch (error) {
      dispatch(downVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));
      dispatch(upVoteThreadDetailCommentActionCreator({ commentId, userVoteId: authUser.id }));

      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddThreadComment,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteCommentThreadDetail,
  asyncToggleDownVoteCommentThreadDetail,
};
