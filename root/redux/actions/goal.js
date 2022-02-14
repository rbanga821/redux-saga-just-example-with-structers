import {ACTION_TYPES} from '@constant';
export function goalChange(goalname) {
  console.log('actionnnn---->    ' + JSON.stringify(goalname));
  return {
    type: ACTION_TYPES.GOAL_CHANGE,
    payload: goalname,
  };
}
export function goalId(goal_id) {
  console.log | ('actionnnm---->' + JSON.stringify(goal_id));
  return {
    type: ACTION_TYPES.GOAL_ID,
    payload: goal_id,
  };
}
