import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearMoney } from '../actions';

class ClearMoney extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.clearMoney();
  }

  render() {
    return (
      <div>
        <button 
          className="btn waves-effect waves-ligh red" 
          onClick = { this.handleClick.bind(this) } > 
          Clear
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearMoney }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClearMoney);