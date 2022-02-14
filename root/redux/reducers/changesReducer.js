import {ACTION_TYPES} from '@constant';

const initialState = {
  names: 'kuldeep',
  image: null,
  named: '',
  value1:555,
};
const changesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGES:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        names: action.payload,
      };

    case ACTION_TYPES.UPDATE_USER_DATA:
      console.log(
        'Reduser actionnnn---->    ' + JSON.stringify(action.payload),
      );
      return {
        ...state,
        image: action.payload,
        
      };
    case ACTION_TYPES.CHANGE_VALUE:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        value1: action.payload,
      };

    default:
      return state;
  }
};
export default changesReducer;
