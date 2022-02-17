import {ACTION_TYPES} from '@constant';
//  import {INITIAL_STATE} from '../store/initial-state.store';

const initialState = {
  pincodeList: [],
};

const pincodeReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PIN_CODE_REQUESTED:
      console.log('Reduser actionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
      };
    case ACTION_TYPES.PIN_CODE_SUCCEEDED:
      console.log('Reduser actionnnnsuccc---->    ' + JSON.stringify(action));
      // return [...state, ...action.payload];

      return {
        ...state,
        pincodeList: action.payload,
      };
    case ACTION_TYPES.PIN_CODE_FAILED:
      console.log('Reduser actionnnnfff---->    ' + JSON.stringify(action));
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default pincodeReducers;
