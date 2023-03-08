/* eslint-disable no-undef */
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('Testing Threads Reducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'unknown' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'First Thread',
            body: 'This is first thread',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Second Thread',
            body: 'This is second thread',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-12',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new threads when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'first Thread',
        body: 'This is first thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'more Thread',
          body: 'This is more thread',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-10',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return one of the thread values with an increased upVote if the user has never upvote when given an action with type  UP_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'first Thread',
        body: 'This is first thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userVoteId: 'users-10',
      },
    };

    // action : user has never increased upVote
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([{ ...initialState[0], upVotesBy: [action.payload.userVoteId] }]);
  });

  it('should return one of the thread values with an increased upVote if the user has done upvote when given an action with type  UP_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'first Thread',
        body: 'This is first thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['users-10'],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userVoteId: 'users-10',
      },
    };

    // action : user has done increased upVote
    const nextState2 = threadsReducer(initialState, action);

    // assert
    expect(nextState2).toEqual([{ ...initialState[0], upVotesBy: [] }]);
  });

  it('should return one of the thread values with an increased downVote if the user has never downVote when given an action with type  DOWN_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-2',
        title: 'Second Thread',
        body: 'This is second thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-2',
        userVoteId: 'users-12',
      },
    };

    // action : user has never increased downVote
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([{ ...initialState[0], downVotesBy: [action.payload.userVoteId] }]);
  });

  it('should return one of the thread values with an increased downVote if the user has done downVote when given an action with type  DOWN_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-2',
        title: 'Second Thread',
        body: 'This is second thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: ['users-12'],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-2',
        userVoteId: 'users-12',
      },
    };

    // action : user has done increased downVote
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([{ ...initialState[0], downVotesBy: [] }]);
  });
});
