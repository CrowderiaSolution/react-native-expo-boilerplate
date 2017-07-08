import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/HomeScreen';
import { connect } from 'react-redux';

import { LoadingScreen } from '../../commons';
import { DataList } from './components';

import { fetchDataList } from './actions';

@connect(
  state => ({
    dataPack: state.home.dataPack,
  }),
  { fetchDataList }
)
class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchDataList();
  }

  render() {
    const {
      dataPack: {
        isFetched,
        data,
        error,
      },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <DataList datalist={data} />
        </View>
      </View>

    );
  }
}

export default HomeScreen;
