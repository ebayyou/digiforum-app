import { ActionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_THREAD_COMMENT:
      return { ...threadDetail, comments: [action.payload.comment, ...threadDetail.comments] };
    case ActionType.CLEAR_THREAD_DETAIL:
      return {};
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
