const getInfo = (coins) => {
  const top10 = coins.filter(({ rank }) => rank < 11);
  top10.forEach(({ name, symbol, priceUsd }) => {
    const coinsList = document.getElementById('coins-list');
    const li = document.createElement('li');
    const divCoin = document.createElement('div');
    const info = document.createElement('p');
    info.innerText = `${name} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}`;
    divCoin.appendChild(info);
    li.appendChild(divCoin);
    coinsList.appendChild(li);
  });
};

const fetchCoins = async () => {
  await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((crypto) => getInfo(crypto.data))
    .catch((error) => error);
};

window.onload = fetchCoins();