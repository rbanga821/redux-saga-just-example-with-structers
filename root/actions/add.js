import {CHANGENAME} from '../constants'
export function changeName(namei) {
  console.log('actionnnn---->    ' + JSON.stringify(namei));
  return {
    type: CHANGENAME,
    payload: namei,
  };
}