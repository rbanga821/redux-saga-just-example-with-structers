import {ACTION_TYPES} from '@constant';
const initialState = {
  namei: 'raman',
};
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGENAME:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        namei: action.payload,
      };

    default:
      return state;
  }
};
export default addReducer;
