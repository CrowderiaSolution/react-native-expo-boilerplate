import React, { Component } from 'react';

import { HomeScreen } from '../screens';
import Navigator from './Navigator';

export default class AppNavigator extends Component {
  state = { }
  render() {
    return <HomeScreen />;
  }
}

export const router = Navigator.router;
