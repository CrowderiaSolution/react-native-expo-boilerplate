import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="home" size={25} color={tintColor} />
      ),
    }),
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: () => ({
      title: 'Notification',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="notification" size={25} color={tintColor} />
      ),
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="user" size={25} color={tintColor} />
      ),
    }),
  },
});
