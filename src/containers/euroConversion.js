import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import axios from 'axios';
import { fetchRates } from '../actions/index'
import MoneyDisplay from './moneyDisplay';

export class EuroConversion extends Component {

  componentWillMount() {
    this.props.fetchRates();
  }

  render() {
    // console.log ('line 16 EuroConversion.js: ',this.props.rates)  
    let euro = this.props.rates.usd*this.props.rates.rates.EUR;
    let usd = this.props.rates.usd;
    

    return (
      <div> 
        <div>Today's USD to Euro Rate: { this.props.rates.rates.EUR } </div>
        <div>Total in USD: ${ usd.toFixed(2) } </div>
        <div>Total in Euros: €{ euro.toFixed(2) } </div>
        <MoneyDisplay />

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