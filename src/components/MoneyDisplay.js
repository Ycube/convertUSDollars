import React from 'react';

const MoneyDisplay = (props) => {
  let { money, symbol } = props;

  return(
    <div className="row">
      <h4 className="center-align">{ symbol } { money.toFixed(2) }</h4>
    </div>
  );
}

export default MoneyDisplay;