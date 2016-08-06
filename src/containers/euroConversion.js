import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import axios from 'axios';
import { fetchRates } from '../actions/index'
import { makeBill, countBills, mapObject, imgBill } from '../helper/utils';
import MoneyDispaly from '../components/MoneyDisplay';

export class EuroConversion extends Component {

  componentWillMount() {
    this.props.fetchRates();
  }

  render() {
    let euro = this.props.rates.usd*this.props.rates.rates.EUR;

    let coins = euro - makeBill(euro).reduce( (a,b) => { return a+b;}, 0);
    let bills = countBills(makeBill(euro)); 
    
    let billItems = mapObject(bills, (billType, key, index) => {
      let imgSrc = imgBill(key); 
      return (
       <div key={index}>  
        <img src={ imgSrc } style={ {width:'150', height:'70'} } /> x { billType }
        </div>
      );
    });
    
    if (!coins) {
      return (
        <MoneyDispaly money={ euro } />
      ) 
    }

    return (
      <div> 
        {/************Eurp Display**************/}
        <MoneyDispaly money={ euro } />

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