import {ACTION_TYPES} from '@constant';
export function changes(names) {
  console.log('actionnnn---->    ' + JSON.stringify(names));
  return {
    type: ACTION_TYPES.CHANGES,
    payload: names,
  };
}
export function userDataUpdate(payload) {
  console.log('actionnnn---->    ' + JSON.stringify(payload));
  return {
    type: ACTION_TYPES.UPDATE_USER_DATA,
    payload: payload,
  };
}
export function userDataUpdate1(image) {
  console.log('actionnnn---->    ' + JSON.stringify(image));
  return {
    type: ACTION_TYPES.UPDATE_USER_DATA,
    payload: image,
  };
}
export function changeValue1(value1){
  console.log('actionnnnn---->'+JSON.stringify(value1))
  return {
    type: ACTION_TYPES.CHANGE_VALUE,
    payload: value1,
  };
}
