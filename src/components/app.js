import React, { Component } from 'react';

import InputForm from '../containers/InputForm';
import EuroConversion from '../containers/EuroConversion';
import NavBar from './Navbar'

export default class App extends Component {
  render() {
    return (
    <div className="row">
      <div className="col s12"><NavBar /></div>
      <div className="col s6"><InputForm /></div>
      <div className="col s6"><EuroConversion /></div>
    </div>
    );
  }
}
