import {ACTION_TYPES} from '@constant';

export function changenamed(changesName) {
  console.log('actionnnn---->    ' + JSON.stringify(changenamed));
  return {
    type: ACTION_TYPES.NAME,
    payload: changesName,
  };
}
