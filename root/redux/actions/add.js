import {ACTION_TYPES} from '@constant';
export function changName(namei) {
  console.log('actionnnn---->    ' + JSON.stringify(namei));
  return {
    type: ACTION_TYPES.CHANGENAME,
    payload: namei,
  };
}
