import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.FILTER_THREAD:
      return threads.filter((thread) => thread.category === action.payload.category);
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.concat([action.payload.vote.userId]),
          };
        }

        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
