import { combineReducers } from 'redux';
import ConversionReducer from './reducerConversion';

const rootReducer = combineReducers({
  rates: ConversionReducer
});

export default rootReducer;
