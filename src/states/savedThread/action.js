import Api from '../../utils/Api';

const ActionType = {
  SAVED_THREAD: 'SAVED_THREAD',
  SAVED_CONDITION: 'SAVED_CONDITION',
  REMOVE_SAVED: 'REMOVE_SAVED',
};

function savedThreadActionCreator(thread) {
  return {
    type: ActionType.SAVED_THREAD,
    payload: {
      thread,
    },
  };
}

function removeSavedThreadActionCreator(threadId) {
  return {
    type: ActionType.REMOVE_SAVED,
    payload: {
      threadId,
    },
  };
}

function saveConditionActionCreator() {
  return {
    type: ActionType.SAVED_CONDITION,
  };
}

function asyncSavedThread(thread) {
  return async (dispatch) => {
    try {
      Api.savedThreadToLocalStorage(thread);
      const getThreads = await Api.getSavedThreadFromLocalStorage();
      dispatch(savedThreadActionCreator(getThreads));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncRemoveSavethread(threadId) {
  return async (dispatch) => {
    try {
      Api.removeThreadFromLocalStorage(threadId);
      const getThreads = await Api.getSavedThreadFromLocalStorage();
      dispatch(removeSavedThreadActionCreator(getThreads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  savedThreadActionCreator,
  removeSavedThreadActionCreator,
  saveConditionActionCreator,
  asyncSavedThread,
  asyncRemoveSavethread,
};
