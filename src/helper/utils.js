export const makeBill = (amount) => {
  let change = [],
      total = 0;
  [100, 50, 20, 10, 5].forEach((bills) => {
    while (total + bills <= amount) {
      change.push(bills);
      total += bills;
    }
  });

  return change;
};

export const countBills = (array) => {
  return array.reduce( (prev, key) => {
    return {...prev, [key] : prev[key] + 1 || 1 }
  }, {});
}; 

export const mapObject = (object, callback) => {
  return Object.keys(object).map(function (key, i) {
    return callback(object[key], key, i);
  });
}

export const imgBill = (billType) => {
  switch(billType) {
    case '5' : 
      return './src/assets/EUR_5.jpg';
    case '10' : 
      return './src/assets/EUR_10.jpg';
    case '20' : 
      return './src/assets/EUR_20.jpg';
    case '50' :
      return './src/assets/EUR_50.jpg';
    case '100' :
      return './src/assets/EUR_100.jpg';
    default : 
      return;
  }
}