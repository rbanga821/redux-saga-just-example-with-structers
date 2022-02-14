import {ACTION_TYPES} from '@constant';

export function changeCount(count) {
  console.log('actionnnn---->    ' + JSON.stringify(count));
  return {
    type: ACTION_TYPES.COUNTER_CHANGE,
    payload: count,
  };
}
export function changeName(name) {
  console.log('actionnnn---->    ' + JSON.stringify(name));
  return {
    type: ACTION_TYPES.NAME_CHANGE,
    payload: name,
  };
}
export function changeValue(value) {
  console.log('actionnnnn----->' + JSON.stringify(value));
  return {
    type: ACTION_TYPES.VALUE_CHANGE,
    payload: value,
  };
}
export function stringChange(string) {
  console.log('actionnnnn----->' + JSON.stringify(string));
  return {
    type: ACTION_TYPES.STRING_CHANGE,
    payload: string,
  };
}
