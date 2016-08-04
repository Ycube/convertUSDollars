import { FETCH_RATES, ADD_MONEY, CONVERT_MONEY } from '../actions/index';

const initialState = {
  rates: {},
  usd: 0,
  euro: {}
};

export default function(state = initialState, action){
  // console.log('TEST: ', test.usd + action.value)
  switch (action.type) {
    case FETCH_RATES : 
      return Object.assign({}, {...state, ...action.payload.data })

    case ADD_MONEY : 
      let test =  Object.assign({}, {...state, usd: {...action.value}})
      return Object.assign({}, {...state, usd: state.usd+action.value })
    
    case CONVERT_MONEY : 
    return Object.assign({}, {...state, euro: {...action.value}})
  }
  return state;
}