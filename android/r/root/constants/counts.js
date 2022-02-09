import {COUNTER_CHANGE} from '.';
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
