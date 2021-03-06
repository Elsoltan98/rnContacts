import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';
import ContactDetails from '../screens/ContactDetails';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import Logout from '../screens/Logout';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={Contacts} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <Stack.Screen name={SETTINGS} component={Settings} />
      <Stack.Screen name={LOGOUT} component={Logout} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
