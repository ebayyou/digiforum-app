import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userVoteId)
              ? thread.upVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
              : thread.upVotesBy.concat([action.payload.userVoteId]),
          };
        }

        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userVoteId)
              ? thread.downVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
              : thread.downVotesBy.concat([action.payload.userVoteId]),
          };
        }

        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
