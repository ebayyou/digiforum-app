import { createContext } from 'react';

export const ThreadContext = createContext('');

export const ThreadConsumer = ThreadContext.Consumer;
export const ThreadProvider = ThreadContext.Provider;
