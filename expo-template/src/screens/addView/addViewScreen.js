import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles/addViewScreen';

export default class AddViewScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Add View</Text>
      </View>
    );
  }
}
