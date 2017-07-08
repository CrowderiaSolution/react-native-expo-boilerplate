import { Platform } from 'react-native';

export const APP = {
  api_base_url: () => {
    if (Platform.OS !== 'ios') {
      return 'http://10.0.3.2:3000/api';
    }
    return 'http://localhost:3000/api';
  },
  FACEBOOK_ID: '14126xxxxxxxxxx',
  GOOGLE_CLIENT_ID: '729744xxxxxx-sko0a80gobkoqvfuxxxxxxx.apps.googleusercontent.com',
};
