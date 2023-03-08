/* eslint-disable no-undef */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Api from '../../utils/Api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { asyncPopulateUserAndThreads } from './action';

const fakeThreadsResponse = [
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
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went error');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    Api._getAllUsers = Api.getAllUsers;
    Api._getAllThreads = Api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    Api._getAllUsers = Api.getAllUsers;
    Api._getAllThreads = Api.getAllThreads;

    // delete backup
    delete Api._getAllUsers;
    delete Api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    Api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    Api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUserAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    Api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    Api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUserAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
