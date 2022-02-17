import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import {ACTION_TYPES} from '@constant';
import EventBus from 'eventing-bus';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      pincode: '',
      data: [],
    };
  }

  componentDidMount() {
    this.pincodeRequestSubscription = EventBus.on(
      ACTION_TYPES.PIN_CODE_REQUESTED,
      () => console.log('pincodee---->' + 'requested'),
    );
    this.pincodeSuccessSubscription = EventBus.on(
      ACTION_TYPES.PIN_CODE_SUCCEEDED,
      this.pincodesuccess,
    );
    this.pincodeFailureSubscription = EventBus.on(
      ACTION_TYPES.PIN_CODE_FAILED,
      () => console.log('pincodee---->' + 'fail'),
    );
  }

  pincodesuccess = response => {
    console.log('pincodeerrrrrrtgg---->' + JSON.stringify(response));
    this.setState({data: response});
  };

  componentWillUnmount() {
    this.pincodeRequestSubscription();
    this.pincodeSuccessSubscription();
    this.pincodeFailureSubscription();
  }
  render() {
    return (
      <ScrollView>
        {/* <Text>{JSON.stringify(this.props.pincodelist)}</Text>
        <Text>
          {JSON.stringify(this.props.pincodeList, null, 4)}
        </Text> */}

        <Text>{this.state.name}</Text>
        <TextInput
          placeholder="Enter Pincode"
          onChangeText={e => this.setState({name: e})}
        />

        {/* <Button
          title="ON PRESSS"
          onPress={() => this.props.changeValue1('raman')}
        /> */}

        <Button
          title="Submitted"
          onPress={() =>
            this.props.pincodeRequested(parseInt(this.state.pincode))
          }
        />

        {this.state.data.length > 0 && (
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => {
              <View>
                <Text>{item.Name}</Text>
              </View>;
            }}></FlatList>
        )}

        {/* <Button
          title="Press me"
          onPress={() => this.props.navigation.navigate('Profile')}
        /> */}
        {/* <Text>{this.props.changeNames}</Text>
        <Button
          title="Click me"
          onPress={() => this.props.changenamed('aman')}
        /> */}
      </ScrollView>
    );
  }
}
export default Login;
