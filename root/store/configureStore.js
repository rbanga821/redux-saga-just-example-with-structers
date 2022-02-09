import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import goalReducer from '../reducers/goalReducer';
import addReducer from '../reducers/addReducer';

const rootReducer = combineReducers({
  myReducer: countReducer,
  goalDataReducer: goalReducer,
  addDataReducer: addReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
