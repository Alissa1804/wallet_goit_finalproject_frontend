const { default: axios } = require('axios');
async function getCurrency() {
  //const response = await axios('https://walletproject.onrender.com/transactions/currency')
  const response = await axios(
    'http://localhost:3000/api/transactions/currency'
  );

  const currencyData = {};

  response.data.currency.forEach(currency => {
    switch (currency.ccy) {
      case 'EUR':
        currencyData.euro = {
          buy: currency.buy,
          sale: currency.sale,
        };
        break;
      case 'USD':
        currencyData.dollar = {
          buy: currency.buy,
          sale: currency.sale,
        };
        break;

      default:
        break;
    }
  });

  return currencyData;
}
//Где будет необходимо в коде, вот так как ниже описано можно вызывать функцию для получения валюты

// getCurrency()
//   .then(currencyData => {
//     EUR = currencyData.euro;
//     console.log('foo', currencyData.euro);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log('EUR', EUR);

module.exports = getCurrency;
