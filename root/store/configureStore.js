import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import goalReducer from '../reducers/goalReducer';

const rootReducer = combineReducers({
  myReducer: countReducer,
  goalDataReducer: goalReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
