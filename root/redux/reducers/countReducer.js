import {ACTION_TYPES} from '@constant';

const initialState = {
  count: 0,
  name: 'raman',
  value: 0,
  string: 'shiva',
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_CHANGE:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        count: action.payload,
      };

    case ACTION_TYPES.NAME_CHANGE:
      console.log(' Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        name: action.payload,
      };

    case ACTION_TYPES.VALUE_CHANGE:
      console.log(' Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        value: action.payload,
      };

    case ACTION_TYPES.STRING_CHANGE:
      console.log('Reduser actionnnn--->   ' + JSON.stringify(action));
      return {
        ...state,
        string: action.payload,
      };

    default:
      return state;
  }
};
export default countReducer;
