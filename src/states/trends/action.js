const ActionType = {
  TREND_BY_CATEGORY: 'TREND_BY_CATEGORY',
};

function trendByCategoryActionCreator(trend) {
  return {
    type: ActionType.TREND_BY_CATEGORY,
    payload: {
      trend,
    },
  };
}

export { ActionType, trendByCategoryActionCreator };
