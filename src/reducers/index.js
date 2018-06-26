import {combineReducers} from 'redux';
import connectReducer from './connectReducer';
import status from './status';

const allReducers = combineReducers ({
  chatbox: connectReducer,
  status: status
});

export default allReducers
