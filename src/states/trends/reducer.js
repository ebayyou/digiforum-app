import { ActionType } from './action';

function trendsReducer(trend = 'all', action = {}) {
  switch (action.type) {
    case ActionType.TREND_BY_CATEGORY:
      return action.payload.trend;
    default:
      return trend;
  }
}

export default trendsReducer;
