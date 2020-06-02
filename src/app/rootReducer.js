import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import thunkReducer from '../features/thunk/thunkSlice';
import fakeReducer from '../features/fake/fakeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  thunk: thunkReducer,
  fake: fakeReducer,
});

export default rootReducer;
