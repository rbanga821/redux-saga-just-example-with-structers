import {CHANGENAME} from '../constants';

const initialState = {

  namei: 'raman',
};
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGENAME:
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
