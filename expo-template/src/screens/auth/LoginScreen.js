import React, { Component } from 'react';
import { Text } from 'react-native';
import { Facebook, Google } from 'expo';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { login } from './actions';

import { Colors, Fonts } from '../../../constants/Theme';
import { APP } from '../../../constants/consts';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

const MeetupText = styled.Text`
  color: ${Colors.greenColor};
  fontSize: 18;
  fontFamily: opnsenBold;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

@connect(state => ({
  isLoading: state.user.isLoading,
}), { login })
export default class LoginScreen extends Component {
  _onLoginPress = name => {
    if (name === 'facebook') {
      this._loginWithFacebook();
    } else {
      this._loginWithGoogle();
    }
  }

  async _loginWithFacebook() {
    const {
      type,
    } = await Facebook.logInWithReadPermissionsAsync(APP.FACEBOOK_ID, {
        permissions: ['public_profile', 'email'],
      });

    if (type === 'success') {
      this.props.login();
    } else {
      throw new Error('Something went wrong with facebook login');
    }
  }

  async _loginWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: APP.GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        this.props.login();
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      throw e;
    }
  }

  render() {
    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>Expo Template</Text>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
            </FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeText}>
                For user login <MeetupText>Login Screen</MeetupText> can log quickly and efficently
              </Text>
            </FlexContainer>
          </FlexContainer>
          <BottomButtonWrapper>
            <Button color={Colors.signUp} onPress={() => this._onLoginPress('google')}>
              <Text style={Fonts.buttonAuth}>Start from</Text>
              <MaterialCommunityIcons name="google" size={30} color={Colors.whiteColor} />
            </Button>
            <Button color={Colors.signIn} onPress={() => this._onLoginPress('facebook')}>
              <Text style={Fonts.buttonAuth}>Connect with</Text>
              <MaterialCommunityIcons name="facebook" size={30} color={Colors.whiteColor} />
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
