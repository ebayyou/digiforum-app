import Api from '../../utils/Api';

const ActionType = {
  PRELOAD_SAVE_THREAD: 'PRELOAD_SAVE_THREAD',
  SAVE_THREAD: 'SAVE_THREAD',
  SAVE_CONDITION: 'SAVE_CONDITION',
  REMOVE_SAVE: 'REMOVE_SAVE',
};

function setIsPreloadSaveThreadActionCreator(threads) {
  return {
    type: ActionType.PRELOAD_SAVE_THREAD,
    payload: {
      threads,
    },
  };
}

function saveThreadActionCreator(saveThread) {
  return {
    type: ActionType.SAVE_THREAD,
    payload: {
      saveThread,
    },
  };
}

function removeSaveThreadActionCreator(threadId) {
  return {
    type: ActionType.REMOVE_SAVE,
    payload: {
      threadId,
    },
  };
}

function saveConditionActionCreator() {
  return {
    type: ActionType.SAVE_CONDITION,
  };
}

function asyncReceiveSaveThread() {
  return (dispatch) => {
    try {
      const threads = Api.getSavedThreadFromSessionStorage();
      dispatch(setIsPreloadSaveThreadActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncSaveThread(thread) {
  return (dispatch) => {
    try {
      Api.savedThreadToSesionStorage(thread);
      dispatch(saveThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncRemoveSavethread(threadId) {
  return async (dispatch) => {
    try {
      Api.removeThreadFromSesionStorage(threadId);
      dispatch(removeSaveThreadActionCreator(threadId));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  saveThreadActionCreator,
  removeSaveThreadActionCreator,
  saveConditionActionCreator,
  asyncSaveThread,
  asyncRemoveSavethread,
  asyncReceiveSaveThread,
};
