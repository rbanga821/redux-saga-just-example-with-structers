import {
  COUNTER_CHANGE,
  NAME_CHANGE,
  STRING_CHANGE,
  VALUE_CHANGE,
} from '../constants';

const initialState = {
  count: 0,
  name: 'raman',
  value: 0,
  string: 'shiva',
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        count: action.payload,
      };

    case NAME_CHANGE:
      console.log(' Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        name: action.payload,
      };

    case VALUE_CHANGE:
      console.log(' Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        value: action.payload,
      };

    case STRING_CHANGE:
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
