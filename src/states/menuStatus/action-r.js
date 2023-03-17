// Rightbar-state

const ActionType = {
  RIGHTBAR_STATUS: 'RIGHTBAR_STATUS',
};

function rightbarStatusActionCreator(status) {
  return {
    type: ActionType.RIGHTBAR_STATUS,
    payload: {
      status,
    },
  };
}

export { ActionType, rightbarStatusActionCreator };
