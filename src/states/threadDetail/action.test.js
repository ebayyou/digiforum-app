/* eslint-disable no-undef */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';

describe('asyncReceiveThreadDetail thunk', () => {
  const fakeThreadDetailResponse = {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
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
  };

  // const fakeErrorResponse = new Error('Ups, something went error');

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    Api.getDetailThread = () => Promise.resolve(fakeThreadDetailResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetailResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    Api.getDetailThread = () => Promise.reject(fakeThreadDetailResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
