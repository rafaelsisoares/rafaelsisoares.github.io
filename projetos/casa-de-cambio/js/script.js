const btnSearch = document.getElementById("search-button");
const btnSave = document.getElementById('save');
const btnClear = document.getElementById('clear');
const input = document.getElementById("currency-input");
const listTitle = document.querySelector('.title-base');
const listCurrencys = document.getElementById("currency-list");

const createList = (currency) => {
  const li = document.createElement("li");
  li.innerHTML = `${currency[0]}: ${currency[1]}`;
  listCurrencys.appendChild(li);
};

const clear = () => {
  listCurrencys.innerHTML = '';
  localStorage.clear();
}

btnSearch.addEventListener("click", async () => {
  const { rates } = await fetchCurrencyAsyncAwait(input.value);
  const arrData = Object.entries(rates);
  listCurrencys.innerHTML = '';
  listTitle.innerText = `Valores referentes a 1 ${input.value}`;
  arrData.forEach((currency) => {
    createList(currency);
  });
});

btnSave.addEventListener('click', () => {
    const listSaved = listCurrencys.innerHTML;
    localStorage.setItem('savedList', listSaved);
});

btnClear.addEventListener('click', clear);

window.onload = () => {
    listCurrencys.innerHTML = localStorage.getItem('savedList')
}