const ActionType = {
  SIDEBAR_STATUS: 'SIDEBAR_STATUS',
};

function sidebarStatusActionCreator(status) {
  return {
    type: ActionType.SIDEBAR_STATUS,
    payload: {
      status,
    },
  };
}

export { ActionType, sidebarStatusActionCreator };
