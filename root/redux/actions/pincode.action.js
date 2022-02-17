import {ACTION_TYPES} from '@constant';

export function pincodeRequested(payload) {
  console.log("pincodeReq------>"+JSON.stringify(payload));
  return {
    type: ACTION_TYPES.PIN_CODE_REQUESTED,
    payload,
  };
}

export function pincodeSucceeded(payload) {
    console.log('#########################pincodeReqsuccess------>' + JSON.stringify(payload));

  return {
    type: ACTION_TYPES.PIN_CODE_SUCCEEDED,
    payload,
  };
}
export function pincodeFailed(payload) {
  return {
    type: ACTION_TYPES.PIN_CODE_FAILED,
    payload,
  };
}
