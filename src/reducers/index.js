import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  rates: Reducer
});

export default rootReducer;
