const cartList = document.querySelector('.cart__items');
const productsList = document.querySelector('.items');
const totalPrice = document.querySelector('.total-price');
const btnClear = document.querySelector('.empty-cart');
let prices = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );
  return section;
};

const calculateTotal = (arr) => {
  totalPrice.innerText = arr.reduce((total, price) => 
  parseFloat((total + price).toPrecision(8)), 0);
  localStorage.setItem('total', JSON.stringify(arr));
};

const increase = (value) => {
  prices.push(value);
  calculateTotal(prices);
};

const decrease = async (item) => {
  const data = item.innerText.split('$');
  const remove = prices.indexOf(JSON.parse(data[data.length - 1]));
  prices.splice(remove, 1);
  calculateTotal(prices);
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const cart = document.querySelector('.cart__items');
  cart.removeChild(event.target);
  decrease(event.target);
  saveCartItems(cartList.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const loading = () => {
  const h3 = document.createElement('h3');
  h3.className = 'loading';
  h3.innerText = 'carregando...';
  productsList.appendChild(h3);
};

const loadComplete = (element) => productsList.removeChild(element);

const setCart = () => {
  const btnAdd = document.querySelectorAll('.item__add');
    btnAdd.forEach((btn) => btn.addEventListener('click', async (event) => {
      const item = event.target.parentElement;
      const { price } = await fetchItem(item.firstElementChild.innerText);
      const itemCart = createCartItemElement({
        sku: getSkuFromProductItem(item),
        name: item.querySelector('span.item__title').innerText,
        salePrice: price,
      });
      cartList.appendChild(itemCart);
      saveCartItems(cartList.innerHTML);
      increase(price);
    }));
};

const createProductList = async (product) => {
  const { results } = await fetchProducts(product);
  loadComplete(productsList.firstElementChild);
  results.forEach(({ id, title, thumbnail }) => {
    const newItem = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
    });
    productsList.appendChild(newItem);
  });
  setCart();
};

const restoreCartItems = () => {
  if (localStorage.getItem('total')) {
    prices = JSON.parse(localStorage.getItem('total'));
    calculateTotal(prices);
  } else totalPrice.innerText = '0';
  cartList.innerHTML = getSavedCartItems();
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

const clear = () => {
  cartList.innerHTML = '';
  localStorage.clear();
  prices.length = 0;
  totalPrice.innerHTML = '0';
};

btnClear.addEventListener('click', clear);

window.onload = () => { 
  loading();
  createProductList('computador');
  restoreCartItems();
};