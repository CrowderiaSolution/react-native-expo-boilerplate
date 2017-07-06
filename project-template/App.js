import React from 'react';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from './constants/Theme';
import { fontAssets } from './helpers';

EStyleSheet.build(Colors);

export default class App extends React.Component {
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
      <View style={styles.container}>
        <Text>Hellow Crowderia!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
