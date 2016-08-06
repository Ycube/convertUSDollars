import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMoney } from '../actions/index'
import MoneyDispaly from '../components/MoneyDisplay';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { usd: null };
  }

  handleClick(value) {
    this.props.addMoney(this.state.usd + value);
  }

  render() {
    let usd = this.props.rates.usd;

    let disabled = usd <= 0 ? 'disabled' : '';
    return (
      <div>
        {/************Dollar Display**************/}
        <MoneyDispaly symbol='$' money={ usd } />
        
        <span>Click to add or subtract from Dollars to convert to Euros</span>
        <div className="row">
          {/************Minus Buttons**************/}
          <div className="col s6">
            <ul>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={usd > 0 ? this.handleClick.bind(this, -1) : null}>
                     <i className="material-icons">-1</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={this.handleClick.bind(this, -5)}>
                  <i className="material-icons">-5</i>
                </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={this.handleClick.bind(this, -10)}>
                   <i className="material-icons">-10</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={this.handleClick.bind(this, -20)}>
                   <i className="material-icons">-20</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={this.handleClick.bind(this, -100)}>
                   <i className="material-icons">-100</i>
                 </a>
              </li>
            </ul>
          </div>
          {/************Plus Buttons**************/}
          <div className="col s6">
            <ul>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" 
                   onClick={this.handleClick.bind(this, 1)}>
                   <i className="material-icons">+1</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" 
                   onClick={this.handleClick.bind(this, 5)}>
                   <i className="material-icons">+5</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" 
                   onClick={this.handleClick.bind(this, 10)}>
                   <i className="material-icons">+10</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" 
                   onClick={this.handleClick.bind(this, 20)}>
                   <i className="material-icons">+20</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" 
                   onClick={this.handleClick.bind(this, 100)}>
                   <i className="material-icons">+100</i>
                 </a>
              </li>
            </ul>
          </div>
        </div>
         
      </div>
      
     )
  }

}

function mapStateToProps({ money,rates }) {
  return { money,rates }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMoney }, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps  )(InputForm);