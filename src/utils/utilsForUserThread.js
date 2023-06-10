// threads
const threadsAndUserCombine = (threads, users) => {
  return threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));
};

const filtersThreadByTrend = (threads, trend) => {
  return threads.filter((thread) => thread.category === trend);
};

const filtersThreadsAndUsersByTrend = (threads, trend, users) => {
  const threadFilters = filtersThreadByTrend(threads, trend);

  return threadFilters.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));
};

const checkConditionThreadSaved = (saveThreads, id) => {
  let condition;
  if (saveThreads.length > 0) {
    saveThreads.forEach((thread) => {
      if (thread.condition && thread.id === id) {
        condition = thread.condition;
      }
    });
  }
  return condition;
};

// User
const findUserthreads = (threads, id) => threads.filter((thread) => thread.ownerId === id);
const findUser = (users, id) => users.find((user) => user.id === id);

const combineUserAndThreads = (threads, id, user) => {
  const userThread = findUserthreads(threads, id);
  return userThread.map((thread) => ({ ...thread, user }));
};

export {
  threadsAndUserCombine,
  filtersThreadsAndUsersByTrend,
  checkConditionThreadSaved,
  findUserthreads,
  findUser,
  combineUserAndThreads,
};
