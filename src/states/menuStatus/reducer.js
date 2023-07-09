import { ActionType } from './action';

const initialState = {
  sidebarStatus: false,
  rightbarStatus: false,
};

function menuStatusReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.SIDEBAR_STATUS:
      return { ...initialState, sidebarStatus: action.payload.status };
    case ActionType.RIGHTBAR_STATUS:
      return { ...initialState, rightbarStatus: action.payload.status };
    default:
      return state;
  }
}

export default menuStatusReducer;
