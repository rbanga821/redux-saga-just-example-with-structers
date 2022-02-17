import {all} from 'redux-saga/effects';
import { watchPincodeListRequests } from './pincodelist.saga';

export default function* rootSaga() {
  yield all([
   watchPincodeListRequests()
  ]);
}
