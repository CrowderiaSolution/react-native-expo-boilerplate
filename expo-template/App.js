import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppLoading } from 'expo';

import { HomeScreen } from './src/screens';

import { Colors } from './constants/Theme';
import { fontAssets } from './helpers';

EStyleSheet.build(Colors);

export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  componentWillMount() {
    this._loadAssetAsync();
  }

  async _loadAssetAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <HomeScreen />
  }
}
