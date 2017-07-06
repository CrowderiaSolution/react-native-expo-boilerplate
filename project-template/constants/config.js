import { Platform } from 'react-native';

export const APP = {
  api_base_url: () => {
    if (Platform.OS !== 'ios') {
      return 'http://10.0.3.2:3000/api';
    }
    return 'http://localhost:3000/api';
  },
  fb_id: '14126xxxxxxxxxx',
  client_id_ios: '729744xxxxxx-sko0a80gobkoqvfuxxxxxxx.apps.googleusercontent.com',
};
