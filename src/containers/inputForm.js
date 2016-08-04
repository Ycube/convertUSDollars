import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMoney } from '../actions/index'
import MoneyCard from '../components/moneyCard';

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

    return (
      <div>
        {/************USD CARD**************/}
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">$ { usd.toFixed(2) }</span>
              </div>
              <div className="card-action">
                <a href="http://www.federalreserve.gov/">$ Reserve</a>
              </div>
            </div>
          </div>
        </div>


        <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" onClick={this.handleClick.bind(this, 100)}><i className="material-icons">100</i></a>
        <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" onClick={this.handleClick.bind(this, 20)}><i className="material-icons">20</i></a>
        <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" onClick={this.handleClick.bind(this, 10)}><i className="material-icons">10</i></a>
        <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" onClick={this.handleClick.bind(this, 5)}><i className="material-icons">5</i></a>
        <a className="btn-floating btn-large waves-effect waves-light teal lighten-2" onClick={this.handleClick.bind(this, 1)}><i className="material-icons">1</i></a>
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