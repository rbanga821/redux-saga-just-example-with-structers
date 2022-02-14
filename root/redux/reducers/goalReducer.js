import {ACTION_TYPES} from '@constant';

const initialState = {
  goal_id: 0,
  goalname: 'raman',
};
const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GOAL_CHANGE:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        goalname: action.payload,
      };
    case ACTION_TYPES.GOAL_ID:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        goal_id: action.payload,
      };

    default:
      return state;
  }
};
export default goalReducer;
