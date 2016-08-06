import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMoney, subMoney } from '../actions'
import MoneyDispaly from '../components/MoneyDisplay';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { usd: null };
  }

  handleClick(value) {
    value > 0 ? this.props.addMoney(this.state.usd + value) : this.props.subMoney(this.state.usd - value)
  }

  render() {
    let usd = this.props.rates.usd;
    let disabled = usd <= 0 ? 'disabled' : '';

    return (
      <div>
        {/************Dollar Display**************/}
        <MoneyDispaly symbol='$' money={ usd } />
        
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
                   onClick={usd > 0 ? this.handleClick.bind(this, -5) : null}>
                  <i className="material-icons">-5</i>
                </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={usd > 0 ? this.handleClick.bind(this, -10) : null}>
                   <i className="material-icons">-10</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={usd > 0 ? this.handleClick.bind(this, -20) : null}>
                   <i className="material-icons">-20</i>
                 </a>
              </li>
              <li>
                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                   disabled={ disabled } 
                   onClick={usd > 0 ? this.handleClick.bind(this, -100) : null}>
                   <i className="material-icons">-100</i>
                 </a>
              </li>
            </ul>
          </div>
          {/************Plus Buttons**************/}
          <div className="col s6">
            <ul>
              <li>
                <img onClick={this.handleClick.bind(this, 1)} src="./src/assets/USD_1.jpg" />
              </li>
              <li>
                <img onClick={this.handleClick.bind(this, 5)} src="./src/assets/USD_5.jpg" />
              </li>
              <li>
                <img onClick={this.handleClick.bind(this, 10)} src="./src/assets/USD_10.jpg" />
              </li>
              <li>
                <img onClick={this.handleClick.bind(this, 20)} src="./src/assets/USD_20.jpg" />
              </li>
              <li>
                <img onClick={this.handleClick.bind(this, 100)} src="./src/assets/USD_100.jpg" />
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
  return bindActionCreators({ addMoney,subMoney }, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);