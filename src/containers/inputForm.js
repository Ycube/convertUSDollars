import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMoney } from '../actions/index'

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { usd: null };

  }



  handleClick(value) {
    this.props.addMoney(this.state.usd + value);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 100)}>+100</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 20)}>+20</button>
      {/*<img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/US20-front.jpg" />*/}
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 10)}>+10</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 5)}>+5</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 1)}>+1</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 0.25)}>+0.25</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 0.10)}>+0.10</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 0.05)}>+0.05</button>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 0.01)}>+0.01</button>
      </div>
      
     )
  }

}

function mapStateToProps({ money }) {
  return { money }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMoney }, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps  )(InputForm);