import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { HomeScreen } from './src/screens';

import { Colors } from './constants/Theme';

EStyleSheet.build(Colors);

export default class App extends Component {
  render() {
    return <HomeScreen />
  }
}
