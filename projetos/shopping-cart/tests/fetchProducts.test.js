require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Testa se a função fetch é executada', async () => {
    await fetchProducts('computador');
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });
  it('Testa se a função utiliza a url correta', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect.assertions(1);
    expect(fetch).toBeCalledWith(url);
  });
  it('Testa se a função retorna os dados corretos', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Testa se a função retorna um erro caso seja executada sem parâmetros', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
  // fail('Teste vazio');
});
