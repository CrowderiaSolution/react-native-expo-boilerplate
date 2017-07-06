import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
