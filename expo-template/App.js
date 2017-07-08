import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppLoading } from 'expo';

import Root from './src/Root';

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
    return <Root />;
  }
}
