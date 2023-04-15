import axios from 'axios';
export async function getCurrency(token) {
  //const response = await axios('https://walletproject.onrender.com/transactions/currency')  // Использовать в конечном варианте

  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2FjNzRlMmU0ZjNjMmQ3NmM5Y2NkZCIsImlhdCI6MTY4MTU3NDc0NywiZXhwIjoxNjgxNTc4MzQ3fQ.dre8ND331xSFCAY5rf1XdJOCBhg2PDlzP69xn5-fbbw';
  const response = await axios(
    'http://localhost:3000/api/transactions/currency',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
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
