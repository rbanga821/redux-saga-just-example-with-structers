import {GOAL_CHANGE, GOAL_ID} from '../constants';

export function goalChange(goalname) {
  console.log('actionnnn---->    ' + JSON.stringify(goalname));
  return {
    type: GOAL_CHANGE,
    payload: goalname,
  };
}
export function goalId(goal_id) {
  console.log|('actionnnm---->' +JSON.stringify(goal_id))
  return{
    type: GOAL_ID,
    payload:goal_id,

  }
  
}
