import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { AddViewForm } from './components';

import styles from './styles/addViewScreen';

export default class AddViewScreen extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: moment(),
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _checkTitle() {
    const { date } = this.state;
    if (this.state.date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a Meetup Date';
  }

  _checkIfButtonDisable() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _create = async values => {
    Alert.alert(
      'Data Added!',
      [
        { text: 'OK', onPress: () => this.props.navigation.goBack() },
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.root}>
        <AddViewForm
          create={this._create}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}

