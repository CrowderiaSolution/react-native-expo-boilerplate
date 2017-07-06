import { TabNavigator } from 'react-navigation';

import {
  HomeScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
  },
});
