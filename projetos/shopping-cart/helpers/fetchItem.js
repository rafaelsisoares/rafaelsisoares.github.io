const fetchItem = async (id) => {
  const urlToFetch = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(urlToFetch);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
