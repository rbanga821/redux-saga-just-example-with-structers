import React, {Component} from 'react';
import {View, Text, Button, FlatList,ScrollView} from 'react-native';

import {ACTION_TYPES} from '@constant';

import EventBus from 'eventing-bus';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
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

    this.props.pincodeRequested(141007);
  }

  pincodesuccess = response => {
    console.log('pincodee--++++-->' + JSON.stringify(response));
    console.log('pincodee----yyy>' + JSON.stringify(this.props.state));
  };

  componentWillUnmount() {
    this.pincodeRequestSubscription();
    this.pincodeSuccessSubscription();
    this.pincodeFailureSubscription();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <Text>{JSON.stringify(this.props.pincodelist, null, 4)}</Text>
        </ScrollView>

        <Button title="Open" />
      </View>
    );
  }
}

export default Profile;
