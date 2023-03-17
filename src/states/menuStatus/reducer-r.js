import { ActionType } from './action-r';

function rightbarStatusReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.RIGHTBAR_STATUS:
      return action.payload.status;
    default:
      return status;
  }
}

export default rightbarStatusReducer;
