// import React, {Component} from 'react';
// import {StyleSheet, View, Button, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as countActions from './root/actions/counts';
// import * as goalActions from './root/actions/goal';
// import * as addActions from './root/actions/add';
// import * as changesActions from './root/actions/changes'

// class App extends Component {
//   decrementCount() {
//     let {count, actions} = this.props;
//     count--;
//     actions.changeCount(count);
//   }
//   incrementCount() {
//     let {count, actions} = this.props;
//     count++;
//     actions.changeCount(count);
//   }
//   render() {
//     const {count, name, state, value, string, goalname, goal_id,namei,names} = this.props;

//     console.log("stateeeee  "+JSON.stringify(state));
//     return (
//       <View styles={styles.container}>
//         <Button title="increment" onPress={() => this.incrementCount()} />
//         <Text style={styles.textCenter}>{count}</Text>
//         <Button title="decrement" onPress={() => this.decrementCount()} />
//         <Text>{name}</Text>
//         <Button
//           title="ChangeName"
//           onPress={() => this.props.actions.changeName('raman banga')}
//         />
//         <Text>{value}</Text>
//         <Button
//           title="ChangeValue"
//           onPress={() => this.props.actions.changeValue(1)}
//         />
//         <Text>{string}</Text>
//         <Button
//           title="string change"
//           onPress={() => this.props.actions.stringChange('raman')}
//         />
//         <Text>{goalname}</Text>
//         <Button
//           title="goalname change"
//           onPress={() => this.props.actions.goalChange('shubham')}
//         />
//         <Text>{goal_id}</Text>
//         <Button
//           title="goal ID change"
//           onPress={() => this.props.actions.goalId(786)}
//         />
//         <Text>{namei}</Text>
//         <Button
//           title="change"
//           onPress={() => this.props.actions.changName('Aman sir')}
//         />
//         <Text>{names}</Text>
//         <Button
//           title="changes"
//           onPress={() => this.props.actions.changes('Bholi devi')}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textCenter: {
//     textAlign: 'center',
//   },
// });

// const mapStateToProps = state => ({
//   count: state.myReducer.count,
//   name: state.myReducer.name,
//   value: state.myReducer.value,
//   string: state.myReducer.string,
//   goalname: state.goalDataReducer.goalname,
//   goal_id:state.goalDataReducer.goal_id,
//   namei:state. addDataReducer.namei,

//   names:state.changesDataReducer.names,

//   state: state,
// });

// const ActionCreators = Object.assign({}, countActions,goalActions,addActions,changesActions);
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {configureStore} from '@redux/store';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
export default App;
