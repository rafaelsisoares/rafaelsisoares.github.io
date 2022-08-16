const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toBeCalled();
  });

  it('Testa se o método localStorage.getItem acessa os dados armazenados na chave cartItems', () => {
    getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
