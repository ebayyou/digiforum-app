/* eslint-disable no-param-reassign */
import { ActionType } from './action';

function savedThreadReducer(savedThread = { threads: [], condition: false }, action = {}) {
  switch (action.type) {
    case ActionType.SAVED_THREAD:
      return { threads: [...action.payload.threads, ...savedThread.threads], condition: false };
    case ActionType.REMOVE_SAVED:
      return { threads: [...action.payload.threads, ...savedThread.threads], condition: false };
    case ActionType.SAVED_CONDITION:
      return {
        threads: [...savedThread.threads],
        condition: !savedThread.condition,
      };
    default:
      return savedThread;
  }
}

export default savedThreadReducer;
