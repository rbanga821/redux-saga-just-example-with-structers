import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Select date and time</Text>
        <Image
          style={{width: 120, height: 120, borderRadius: 60, margin: 30}}
          source={{
            uri: this.state.image,
          }}
        />
        <Button title="Open" />
      </View>
    );
  }
}

export default Profile;
