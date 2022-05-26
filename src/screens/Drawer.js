import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawerContent from '../components/CustomDrawerContent';
import StackNavigator from './StackNavigator';

const AppDrawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export const Drawer = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <AppDrawer.Screen name="Stack" component={StackNavigator} />
    </AppDrawer.Navigator>
  );
};
