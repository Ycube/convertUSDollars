import React, { Component } from 'react';

import InputForm from '../containers/inputForm';
import EuroConversion from '../containers/euroConversion';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
    <div className="row">
      <div className="col s12"><NavBar /></div>
      <h5 className="center-align"> Click US Bills to convert into Euros </h5>
      <div className="col s6"><InputForm /></div>
      <div className="col s6"><EuroConversion /></div>
    </div>
    );
  }
}
