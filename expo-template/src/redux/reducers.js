import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  UserReducer,
} from '../screens';

import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  navigation,
  user: UserReducer,
  form,
});
