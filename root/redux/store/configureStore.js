import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import goalReducer from '../reducers/goalReducer';
import addReducer from '../reducers/addReducer';
import changesReducer from '../reducers/changesReducer';

const rootReducer = combineReducers({
  myReducer: countReducer,
  goalDataReducer: goalReducer,
  addDataReducer: addReducer,
  changesDataReducer: changesReducer
});
// const configureStore = () => {
//   return createStore(rootReducer);
export function configureStore(initialState) {
  const store = createStore(
    rootReducer
  );
  return store;

};
// export default configureStore;
