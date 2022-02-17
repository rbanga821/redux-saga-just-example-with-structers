import {takeEvery,takeLatest , call, put} from 'redux-saga/effects';
import {ACTION_TYPES} from '@constant';
import {pincodeList} from '../api';
import {pincodeSucceeded, pincodeFailed} from '../actions';

export function* watchPincodeListRequests() {
  yield takeLatest(ACTION_TYPES.PIN_CODE_REQUESTED, requestPincodeList);
}

function* requestPincodeList(action) {
  try {
    console.log("sagaRequest@@@@@-->"+JSON.stringify(action.payload));
    const pincodeResponse = yield call(pincodeList, action.payload);
    console.log('pincodeResponseeeeee--->' + JSON.stringify(pincodeResponse));
    yield put(pincodeSucceeded(pincodeResponse));
  } catch (e) {
        console.log(
          'ERRORR--->' + JSON.stringify(e),
        );

    yield put(pincodeFailed(e));
  }
}
