import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import { fetchRates } from '../actions/index';

export class NavBar extends Component {
  
  componentWillMount() {
    this.props.fetchRates();
  }

  render() {

    let rate = this.props.rates.rates.EUR;
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">$ to € </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="https://github.com/Ycube/convertUSDollars">GitHub</a></li>
            {/*<li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">JavaScript</a></li>*/}
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Today's Rate</li>
            <li><a href="http://fixer.io/">{ rate }</a></li>
          </ul>
        </div>
      </nav>    
    );
  }
}

function mapStateToProps({ rates }) {
  return { rates }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRates }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);