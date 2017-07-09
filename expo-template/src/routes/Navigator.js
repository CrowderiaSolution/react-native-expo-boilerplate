import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {
  AddViewScreen,
} from '../screens';

import { Colors } from '../../constants/Theme';

const CloseButton = styled(Touchable) `
  marginLeft: 10;
`;

const NavbarDefaultStyle = {
  backgroundColor: Colors.greenColor,
};

export default StackNavigator({
  Home: { screen: HomeNavigator },
  AddView: {
    screen: AddViewScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add View',
      headerStyle: NavbarDefaultStyle,
      headerTintColor: Colors.whiteColor,
      headerLeft: (
        <CloseButton feedback="opacity" onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="close"
            size={30}
            color={Colors.whiteColor}
          />
        </CloseButton>
      ),
    }),
  },
}, {
  mode: 'modal',
});
