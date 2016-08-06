import axios from 'axios';

// fixer.io

const rootURL = 'http://api.fixer.io/latest?base=USD';

export const FETCH_RATES = 'FETCH_RATES';
export const ADD_MONEY = 'ADD_MONEY';
export const SUB_MONEY = 'SUB_MONEY';
export const CONVERT_MONEY = 'CONVERT_MONEY';

export function fetchRates() {

  const url = `${rootURL}` 
  const request = axios.get(url);

  return {
    type: FETCH_RATES,
    payload: request
  }
}

export function addMoney(value) {
  return {
    type: ADD_MONEY,
    value
  }
}

export function subMoney(value) {
  return {
    type: SUB_MONEY,
    value
  }
}

export function convertMoney(value) {
  return {
    type: CONVERT_MONEY,
    value
  }
}