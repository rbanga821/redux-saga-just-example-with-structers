import {COUNTER_CHANGE, VALUE_CHANGE, NAME_CHANGE,STRING_CHANGE} from '../constants';

export function changeCount(count) {
  console.log('actionnnn---->    ' + JSON.stringify(count));
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
export function changeName(name) {
  console.log('actionnnn---->    ' + JSON.stringify(name));
  return {
    type: NAME_CHANGE,
    payload: name,
  };
}
export function changeValue(value){
  console.log('actionnnnn----->' + JSON.stringify(value));
  return{
    type: VALUE_CHANGE,
    payload: value,
};
}
export function stringChange(string){
   console.log('actionnnnn----->' + JSON.stringify(string));
  return{
    type:STRING_CHANGE,
    payload: string,
  }
}