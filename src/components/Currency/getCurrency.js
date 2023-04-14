import axios from 'axios';
export async function getCurrency() {
  //const response = await axios('https://walletproject.onrender.com/transactions/currency')  // Использовать в конечном варианте
  const response = await axios(
    'http://localhost:3000/api/transactions/currency'
  );

  const currencyData = {};

  response.data.currency.forEach(currency => {
    switch (currency.ccy) {
      case 'EUR':
        currencyData.eur = {
          buy: currency.buy,
          sale: currency.sale,
        };
        break;
      case 'USD':
        currencyData.usd = {
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
