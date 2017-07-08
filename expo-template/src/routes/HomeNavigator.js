import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';

import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';

import { Colors } from '../../constants/Theme';

const AddButton = styled(Touchable) `
  marginRight: 10;
`;

const NavbarDefaultStyle = {
  backgroundColor: Colors.greenColor,
};

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerStyle: NavbarDefaultStyle,
      headerRight: (
        <AddButton feedback="opacity" onPress={() => navigation.navigate('AddView')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </AddButton>
      ),
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="home" size={25} color={tintColor} />
      ),
    }),
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: () => ({
      title: 'Notification',
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="notification" size={25} color={tintColor} />
      ),
    }),
  },
  Profile: {
    screen: ProfileScreen,
    headerStyle: NavbarDefaultStyle,
    navigationOptions: () => ({
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="user" size={25} color={tintColor} />
      ),
    }),
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.greenColor,
    pressColor: Colors.greenColor,
    indicatorStyle: Colors.greenColor,
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
