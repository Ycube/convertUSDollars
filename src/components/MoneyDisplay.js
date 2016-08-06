import React from 'react';

const MoneyDisplay = (props) => {
  let { money, symbol } = props;

  return(
    <div> 
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ symbol } { money.toFixed(2) }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyDisplay;