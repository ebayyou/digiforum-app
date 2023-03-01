import Api from '../../utils/Api';

const ActionType = {
  SAVED_THREAD: 'SAVED_THREAD',
  SAVED_CONDITION: 'SAVED_CONDITION',
  REMOVE_SAVED: 'REMOVE_SAVED',
};

function savedThreadActionType(threads) {
  return {
    type: ActionType.SAVED_THREAD,
    payload: {
      threads,
    },
  };
}

function removeSavedThreadActionType(threads) {
  return {
    type: ActionType.REMOVE_SAVED,
    payload: {
      threads,
    },
  };
}

function saveConditionActionType() {
  return {
    type: ActionType.SAVED_CONDITION,
  };
}

function asyncSavedThread(thread) {
  return (dispatch) => {
    try {
      Api.savedThreadToLocalStorage(thread);
      const getThreads = Api.getSavedThreadFromLocalStorage();
      dispatch(savedThreadActionType(getThreads));
      console.log(getThreads);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncRemoveSavethread(threadId) {
  return (dispatch) => {
    try {
      Api.removeThreadFromLocalStorage(threadId);
      const getThreads = Api.getSavedThreadFromLocalStorage();
      dispatch(removeSavedThreadActionType(getThreads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  savedThreadActionType,
  removeSavedThreadActionType,
  saveConditionActionType,
  asyncSavedThread,
  asyncRemoveSavethread,
};
