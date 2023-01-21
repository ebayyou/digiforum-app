import { ActionType } from './action';

function threadDetailRedeucer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default:
      return threadDetail;
  }
}

export default threadDetailRedeucer;
