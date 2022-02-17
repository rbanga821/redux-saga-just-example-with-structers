import {ACTION_TYPES} from '@constant';
const initialState = {
  changeNames:[]
};
const changeName= (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NAME:
      console.log('Reduseractionnnn---->    ' + JSON.stringify(action));
      return {
        ...state,
        changeNames: action.payload,
      };
    // case ACTION_TYPES.PIN_CODE_SUCCEEDED:
    //   console.log('Reduser actionnnn----sucess>    ' + JSON.stringify(action));
    //   return {
    //     ...state,
    //     changeNames: action.payload,
    //   };
    // case ACTION_TYPES.PIN_CODE_REQUESTED:
    //   console.log('Reduser actionnnn----reqq>    ' + JSON.stringify(action));
    //   return {
    //     ...state,
    //   };

    // case ACTION_TYPES.PIN_CODE_FAILED:
    //   console.log('Reduser actionnnn---fail->    ' + JSON.stringify(action));
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
export default changeName;
