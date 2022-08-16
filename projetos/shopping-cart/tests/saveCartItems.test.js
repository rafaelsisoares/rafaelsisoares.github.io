const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const expectParam = '<ol><li>Item</li></ol>';
localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se o método localStorage.setItem é chamado', () => {
    saveCartItems(expectParam);
    expect.assertions(1);
    expect(localStorage.setItem).toBeCalled();
  });

  it('Testa se localStorage.setItem é chamado com os parâmetros corretos', () => {
    saveCartItems(expectParam);
    expect.assertions(1);
    expect(localStorage.setItem).toBeCalledWith('cartItems', expectParam);
  });
  // fail('Teste vazio');
});
