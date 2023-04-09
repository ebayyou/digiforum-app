import { all } from 'redux-saga/effects';
import mySaga from './threads/sagas';

export default function* rootSaga() {
  yield all([mySaga()]);
}
