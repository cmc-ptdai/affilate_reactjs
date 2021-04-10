import userReducer from './userReducer';
import loading from './loading';
import { combineReducers } from 'redux';

const RootReducer = combineReducers ({
  userReducer,
  loading
})

export default RootReducer
