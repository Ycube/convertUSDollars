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

export const countBills = (moneyArr) => {
  let bills = {};

  for(var i = 0; i < moneyArr.length; i++) {
    if (bills[moneyArr[i]]) {
      bills[moneyArr[i]]++;
    } else {
      bills[moneyArr[i]] = 1;
    }
  }  
  return bills;
};  

export const mapObject = (object, callback) => {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}