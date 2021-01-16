const express = require('express');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const app = express();

app.get('/api/rates', async (req, res) => {

  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?' + new URLSearchParams({ symbol: "DAI,USDC,ETHRSIAPY,ETH,BAT,UNI" });

  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': 'f5f77295-eb22-4c1f-9a1b-e32bfa7c8561'
    }
  });

  const data = (await result.json()).data;

  const rates = Object.keys(data).map(symbol => ({ symbol, price: data[symbol].quote.USD.price }))

  res.json(rates);
});

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`)
})