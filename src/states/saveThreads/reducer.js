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
      saveThreads.map((thread) => {
        if (thread.condition && thread.id === action.payload.threadId) {
          return {
            ...thread,
            condition: false,
          };
        }
        return thread;
      });

      return saveThreads.filter((thread) => thread.id !== action.payload.threadId);
    default:
      return saveThreads;
  }
}

export default saveThreadsReducer;
