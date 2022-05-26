import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import EditProfileScreen from '../components/EditProfileScreen';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <HomeTabNavigator.Navigator>
      <HomeTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <HomeTabNavigator.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <HomeTabNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </HomeTabNavigator.Navigator>
  );
};
