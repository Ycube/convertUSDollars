import React, { Component } from 'react';


import InputForm from '../containers/inputForm';
import EuroConversion from '../containers/euroConversion';


export default class App extends Component {
  render() {
    return (
      <div>        
        <EuroConversion />
        <InputForm />
      </div>
    );
  }
}
