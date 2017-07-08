import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
} from '../screens';

export default combineReducers({
  home: HomeReducer,
  form,
});
