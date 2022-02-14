import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../root/components/home/index';
import Profile from '../../root/components/profile/index';
import Login from '../../root/components/login/index';
import {NavigationContainer} from '@react-navigation/native';

function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
