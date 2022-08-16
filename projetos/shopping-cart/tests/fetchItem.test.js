require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });
  it('Testa se fetch utiliza a url correta', async () => {
    const expectUrl = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(fetch).toBeCalledWith(expectUrl);
  });
  it('Testa se a função retorna os dados corretos', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Testa se a função retorna um erro caso seja chamada sem parâmetros', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
  //fail('Teste vazio');
});
