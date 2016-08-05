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
      return 'http://www.theibns.org/joomla/images/stories/bnoy2013/EUR-5-Front.png';
    case '10' : 
      return 'https://openclipart.org/image/2400px/svg_to_png/184845/10EuroSchein.png';
    case '20' : 
      return 'http://www.banknotenews.com/files/european_monetary_union_ecb_20_euros_2015.00.00_b110x3_pnl_xa_3994337997_f.jpg';
    case '50' :
      return 'https://openclipart.org/image/2400px/svg_to_png/185895/50EuroSchein.png';
    case '100' :
      return 'http://news.bbc.co.uk/olmedia/1500000/images/_1500330_100euro300.jpg';
    default : 
      return;
  }
}