import { createContext } from 'react';

const ThreadContext = createContext('');

export const ThreadConsumer = ThreadContext.Consumer;
export const ThreadProvider = ThreadContext.Provider;

export default ThreadContext;
