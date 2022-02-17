import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from '../reducers/countReducer';
import goalReducer from '../reducers/goalReducer';
import addReducer from '../reducers/addReducer';
import changesReducer from '../reducers/changesReducer';
import changeName from '../reducers/changeName';
import pincodeReducers from '../reducers/pincode.reducer';
import {eventBusMiddleware} from '../middlewares';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const middlewares = [eventBusMiddleware];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const rootReducer = combineReducers({
  pincodelist: pincodeReducers,
  myReducer: countReducer,
  goalDataReducer: goalReducer,
  addDataReducer: addReducer,
  changesDataReducer: changesReducer,
  changessDataReducer: changeName,
});
// const configureStore = () => {
//   return createStore(rootReducer);
export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(rootSaga);
store.subscribe((state)=>{
  console.log(JSON.stringify(state,null,4));
})
  return store;
}
// export default configureStore;
