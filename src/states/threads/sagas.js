import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../utils/Api';
import { ActionType, addThreadFailed, addThreadSuccess } from './action';

function* addThread(action) {
  try {
    const thread = yield call(Api.createThread({ ...action.payload }));
    yield put(addThreadSuccess(thread));
  } catch (error) {
    yield put(addThreadFailed(error.message));
  }
}

export default function* mySaga() {
  yield takeEvery(ActionType.ADD_THREAD_REQUEST, addThread);
}
