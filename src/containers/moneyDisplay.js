import React, { Component } from 'react'; 
import { connect } from 'react-redux';


export default class moneyDisplay extends Component {
  render() {
    console.log(getState())
    return(
      <div> 
        <div>MONEYDISPLAY</div>
      </div>
    );
  }
}

