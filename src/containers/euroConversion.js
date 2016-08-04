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
                {/************EURO CARD**************/}
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">€{ euro.toFixed(2) }</span>
              </div>
              <div className="card-action">
                <a href="https://www.ecb.europa.eu/home/html/index.en.html">€ Central Bank</a>
              </div>
            </div>
          </div>
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