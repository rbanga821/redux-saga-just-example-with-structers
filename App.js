import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {configureStore} from '@redux/store';
import {INITIAL_STATE} from '@redux/store';
const store = configureStore(INITIAL_STATE);
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
export default App;
