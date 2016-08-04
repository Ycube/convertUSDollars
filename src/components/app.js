import React, { Component } from 'react';


import InputForm from '../containers/inputForm';
import EuroConversion from '../containers/euroConversion';
import NavBar  from './navbar.js';

export default class App extends Component {
  render() {
    return (
      <div>   
        <NavBar />     
        <EuroConversion />
        <InputForm />
      </div>
    );
  }
}
