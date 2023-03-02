import { ActionType } from './action';

function savedThreadReducer(savedThreads = [], action = {}) {
  switch (action.type) {
    case ActionType.SAVED_THREAD:
      return [
        {
          ...action.payload.thread,
          condition: true,
        },
        ...savedThreads,
      ];
    case ActionType.REMOVE_SAVED:
      return savedThreads.filter((thread) => thread.id !== action.payload.threadId);
    default:
      return savedThreads;
  }
}

export default savedThreadReducer;
