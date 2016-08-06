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
    // const imgStyle = {
    //   margin: 10 0 0 0;
    // }
    
    let billItems = mapObject(bills, (billType, key, index) => {
      let imgSrc = imgBill(key); 
      return (
       <div className="row" key={index}>  
         <div className="right-align col s6">
           <img 
           src={ imgSrc } />
         </div>

         <div className="left-align col s6">
           <h4> X { billType } </h4>
         </div>
       </div>
      );
    });
    
    if (!coins) {
      return (
        <MoneyDispaly symbol='€' money={ euro } />
      ) 
    }

    return (
      <div> 
        {/************Eurp Display**************/}
        <MoneyDispaly symbol='€' money={ euro } />

      {/************Display Euros**************/}
        <div className="center-align" >
          <ul>
            { billItems }
            <h4>€ Coins: { coins.toFixed(2) }</h4>
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