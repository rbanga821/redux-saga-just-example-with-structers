import React, {Component} from 'react';
import {View, Text,Button, TextInput} from 'react-native';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';

class Login extends Component {
  constructor(){
    super();
    this.state={
    
      name:"",
    }}
  
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Text>{this.props.value1}</Text>
        <Text>{this.state.name}</Text>
        <TextInput placeholder='Google Serach' onChangeText={(e)=>this.setState({name:e})}/>

        <Button
          title="ON PRESSS"
          onPress={() => this.props.changeValue1
            ('raman')}
        />

        <Button
          title="Press me"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}
export default Login;
