import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/HomeScreen';

import { LoadingScreen } from '../../commons';
import { DataList } from './components';

class HomeScreen extends Component {
  state = {
    loading: false,
    data: [
      { title: 'Hello 1', name: 'Data name 1' },
      { title: 'Hello 2', name: 'Data name 2' },
      { title: 'Hello 3', name: 'Data name 3' },
      { title: 'Hello 4', name: 'Data name 4' },
    ],
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <DataList datalist={this.state.data} />
        </View>
      </View>

    );
  }
}

export default HomeScreen;
