import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import axios from 'axios';
import { fetchRates } from '../actions/index'
import MoneyDisplay from './moneyDisplay';
import { makeBill,countBills, mapObject } from '../helper/utils';

export class EuroConversion extends Component {

  componentWillMount() {
    this.props.fetchRates();
  }

  render() {
    let euro = this.props.rates.usd*this.props.rates.rates.EUR;

    let coins = euro - makeBill(euro).reduce( (a,b) => { return a+b;}, 0);
    let bills = countBills(makeBill(euro));
    
    let billItems = mapObject(bills, (i) => { 
      return (
       <div key={i}>  
          €: {i} - {bills[i]}
        </div>
      );
    });
    
    if (!coins) {
      return (
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">€{ euro.toFixed(2) }</span>
              </div>
            </div>
          </div>
        </div>
      ) 
    }

    return (
      <div> 
        {/************EURO CARD**************/}
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">€{ euro.toFixed(2) }</span>
              </div>
            </div>
          </div>
        </div>

      {/************Display Euros**************/}
        <div>
          <ul>
            { billItems }
            <div>€ Coins: { coins.toFixed(2) }</div>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rates }) {
  return { rates }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRates }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EuroConversion)