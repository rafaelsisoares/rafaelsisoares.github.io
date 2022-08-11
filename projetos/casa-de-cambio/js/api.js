const endPoint = "https://api.exchangerate.host/latest?base=";

const fetchCurrency = (currency) => {
  const urlToFetch = `${endPoint}${currency}`;
  return fetch(urlToFetch)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchCurrencyAsyncAwait = async (currency) => {
  try {
    const urlToFetch = `${endPoint}${currency}`;
    const response = await fetch(urlToFetch);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

//fetchCurrency('BRL');
// fetchCurrencyAsyncAwait("BRL");
