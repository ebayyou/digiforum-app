import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('Testing Thread Detail Reducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'unknown',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {};
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          body: 'Ini adalah thread pertama',
          category: 'General',
          title: 'Thread Pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
          downVotesBy: [],
          id: 'thread-1',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the empty object when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      body: 'Ini adalah thread pertama',
      category: 'General',
      title: 'Thread Pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      downVotesBy: [],
      id: 'thread-1',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
    };
    const action = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({});
  });
});
