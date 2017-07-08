import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';

import Root from './src/Root';

import { Colors } from './constants/Theme';
import { fontAssets } from './helpers';
import store from './src/redux/store';

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
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
