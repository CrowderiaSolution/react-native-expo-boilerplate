import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import { Colors } from '../../constants/Theme';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle}>
    <FormLabel fontFamily="opnsen" labelStyle={{ color: Colors.blackColor }}>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
    />
    {error && touched &&
      <FormValidationMessage fontFamily="opnsen" labelStyle={{ color: Colors.redColor }}>
        {error}
      </FormValidationMessage>
    }
  </View>
);

export default TextInputWithValidations;
