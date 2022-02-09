// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import React from 'react';
// // import type {Node} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };

// // const App: () => Node = () => {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.js</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // export default App;
// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer, TabActions} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//       }}>
//       <Text style={{fontSize:25,fontWeight:'bold'}}>Home!</Text>
//     </View>
//   );
// }
// function LoginScreen(){
//   return (
//     <View
//       style={{
//         backgroundColor: '#ffffff',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text style={{fontSize: 25, fontWeight: 'bold'}}>Login!</Text>
//     </View>
//   );
// }
// function SettingsScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//       }}>
//       <Text style={{fontSize: 25, fontWeight: 'bold'}}>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}>
        
//         <Tab.Screen name="Home" component={HomeScreen}  
//          />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Login" component={LoginScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// import React,{Component} from "react";
// import { View,Text,Button } from "react-native";


// class App extends Component {

// constructor(){
//   super();
//   this.state={
//     count:0
//   }
// }

//   render(){
//     return (
//       <View>
//         <Button
//           title="+ Add"
//           onPress={() => this.setState({count: this.state.count + 1})}
//         />
//         <Text style={{textAlign:'center',fontSize:50,fontWeight:'bold'}}>{this.state.count}</Text>
//         <Button
//           title="- Sub"
//           onPress={() => this.setState({count: this.state.count - 1})}
//         />
//       </View>
//     );
//   }
// }
// export default App;

// import React, {Component} from 'react';
// import {StyleSheet, View, Button, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {changeCount} from './root/actions/counts';
// import {bindActionCreators} from 'redux';

// class App extends Component {
//   decrementCount() {
//     let {count, actions} = this.props;
//     count--;
//     console.log(count);
//     actions.changeCount(count);
//   }
//   incrementCount() {
//     let {count, actions} = this.props;
//     count++;
//     console.log(count)
//     actions.changeCount(count);
//   }
//   render() {
//     const {count} = this.props;
//     console.log(count); 
//     return (
//       <View styles={styles.container}>
//         <Button title="increment" onPress={() => this.incrementCount()} />
//         <Text>{count.count}</Text>
//         <Button title="decrement" onPress={() => this.decrementCount()} />
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
// });

// const mapStateToProps = state => ({
//   count: state.count,
// });

// const ActionCreators = Object.assign({}, changeCount);
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countActions from './root/actions/counts';
import * as goalActions from './root/actions/goal';

class App extends Component {
  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const {count, name, state, value, string, goalname, goal_id} = this.props;
    
    console.log("stateeeee  "+JSON.stringify(state));
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text style={styles.textCenter}>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
        <Text>{name}</Text>
        <Button
          title="ChangeName"
          onPress={() => this.props.actions.changeName('raman banga')}
        />
        <Text>{value}</Text>
        <Button
          title="ChangeValue"
          onPress={() => this.props.actions.changeValue(1)}
        />
        <Text>{string}</Text>
        <Button
          title="string change"
          onPress={() => this.props.actions.stringChange('raman')}
        />
        <Text>{goalname}</Text>
        <Button
          title="goalname change"
          onPress={() => this.props.actions.goalChange('shubham')}
        />
        <Text>{goal_id}</Text>
        <Button
          title="goal ID change"
          onPress={() => this.props.actions.goalId(786)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.myReducer.count,
  name: state.myReducer.name,
  value: state.myReducer.value,
  string: state.myReducer.string,
  goalname: state.goalDataReducer.goalname,
  goal_id:state.goalDataReducer.goal_id,

  state: state,
});

const ActionCreators = Object.assign({}, countActions,goalActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);