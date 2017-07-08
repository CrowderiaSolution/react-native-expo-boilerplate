import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {
  AddViewScreen,
} from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  AddView: { screen: AddViewScreen },
}, {
  mode: 'modal',
});
