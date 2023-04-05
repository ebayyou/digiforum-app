// Sidebar-state
const ActionType = {
  SIDEBAR_STATUS: 'SIDEBAR_STATUS',
  RIGHTBAR_STATUS: 'RIGHTBAR_STATUS',
};

function sidebarStatusActionCreator(status) {
  return {
    type: ActionType.SIDEBAR_STATUS,
    payload: {
      status,
    },
  };
}

function rightbarStatusActionCreator(status) {
  return {
    type: ActionType.RIGHTBAR_STATUS,
    payload: {
      status,
    },
  };
}

export { ActionType, sidebarStatusActionCreator, rightbarStatusActionCreator };
