import { FETCH_RATES, ADD_MONEY, SUB_MONEY, CONVERT_MONEY } from '../actions';

const initialState = {
  rates: {},
  usd: 0,
  euro: {}
};

export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_RATES : 
      return Object.assign({}, {...state, ...action.payload.data })

    case ADD_MONEY : 
      return Object.assign({}, {...state, usd: state.usd+action.value })

    case SUB_MONEY : 
      if (state.usd - action.value < 0) {
        return Object.assign({}, {...state, usd: 0 }) 
      } else {
        return Object.assign({}, {...state, usd: state.usd-action.value })
      }
        
    case CONVERT_MONEY : 
    return Object.assign({}, {...state, euro: {...action.value}})
  }
  return state;
}