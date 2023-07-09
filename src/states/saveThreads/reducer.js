import { ActionType } from './action';

function saveThreadsReducer(saveThreads = [], action = {}) {
  switch (action.type) {
    case ActionType.PRELOAD_SAVE_THREAD:
      return action.payload.threads;
    case ActionType.SAVE_THREAD:
      return [
        {
          ...action.payload.saveThread,
          condition: true,
        },
        ...saveThreads,
      ];
    case ActionType.REMOVE_SAVE:
      return saveThreads.filter((thread) => thread.id !== action.payload.threadId);
    default:
      return saveThreads;
  }
}

export default saveThreadsReducer;
