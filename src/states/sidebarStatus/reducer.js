import { ActionType } from './action';

function sidebarstatusReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.SIDEBAR_STATUS:
      return action.payload.status;
    default:
      return status;
  }
}

export default sidebarstatusReducer;
