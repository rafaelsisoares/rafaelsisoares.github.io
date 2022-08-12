const principal = document.getElementsByTagName('main');
const cores = document.getElementsByClassName('color');
const paleta = document.getElementsByTagName('section');
const pixels = document.getElementsByClassName('pixel');
const classColors = ['color0', 'color1', 'color2', 'color3'];
function elementMaker(elemento, id, classe, conteudo) {
  const novoElemento = document.createElement(elemento);
  if (id !== '') {
    novoElemento.id = id;
  }
  if (classe !== '') {
    novoElemento.classList.add(classe);
  }
  if (conteudo !== '') {
    novoElemento.innerText = conteudo;
  }

  principal[0].appendChild(novoElemento);
}
elementMaker('h1', 'title', '', 'Paleta de Cores');
function alimentadorDaSection(elemento, id, classe, conteudo) {
  const novoElemento = document.createElement(elemento);
  if (id !== '') {
    novoElemento.id = id;
  }
  if (classe !== '') {
    novoElemento.classList.add(classe);
  }
  if (conteudo !== '') {
    novoElemento.innerText = conteudo;
  }
  paleta[0].appendChild(novoElemento);
}
function standard() {
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    linha.classList.add('cut');
    for (let j = 0; j < 5; j += 1) {
      const novoPixel = document.createElement('div');
      novoPixel.classList.add('pixel');
      linha.appendChild(novoPixel);
    }
    principal[0].lastElementChild.appendChild(linha);
  }
}

function personalized(valor) {
  principal[0].lastElementChild.innerHTML = '<section id="pixel-board"';
  for (let i = 0; i < valor; i += 1) {
    const linha = document.createElement('div');
    linha.classList.add('cut');
    for (let j = 0; j < valor; j += 1) {
      const novoPixel = document.createElement('div');
      novoPixel.classList.add('pixel', 'white');
      linha.appendChild(novoPixel);
    }
    principal[0].lastElementChild.appendChild(linha);
  }
}
function gridMaker(tamanho) {
  if (tamanho >= 5 && tamanho <= 50) {
    personalized(tamanho);
  } else {
    alert('Board inválido!');
  }

  if (tamanho > 50) {
    personalized(50);
  }
}
function select(evento) {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].classList.remove('selected');
    }
  }
  evento.classList.add('selected');
}

function verify() {
  paleta[0].addEventListener('click', (event) => {
    if (event.target.classList[0] === 'color') {
      select(event.target);
    }
  });
}

function paint() {
  const grid = document.getElementById('pixel-board');
  const selectedColor = document.getElementsByClassName('selected');
  grid.addEventListener('click', (event) => {
    const limparGrid = event.target;
    limparGrid.classList.remove(event.target.classList[1]);
    limparGrid.classList.add(selectedColor[0].classList[1]);
    limparGrid.style.backgroundColor = selectedColor[0].style.backgroundColor;
  });
}
function randomColor(classe) {
  for (let i = 1; i < classe.length; i += 1) {
    let newColor = '#';
    newColor += Math.floor(Math.random() * 0x1000000).toString(16).padStart(6);
    cores[i].style.backgroundColor = newColor;
  }
}

elementMaker('section', 'color-palette', '', '');
for (let i = 0; i < 4; i += 1) {
  alimentadorDaSection('div', '', 'color', '');
}
for (let i = 0; i < classColors.length; i += 1) {
  cores[i].classList.add(classColors[i]);
}
elementMaker('input', 'board-size', '', '');
const input = document.getElementById('board-size');
input.type = 'number';
input.min = 1;
input.max = 50;
elementMaker('button', 'generate-board', '', 'VQV');
const botaoCriaGrid = document.getElementById('generate-board');
elementMaker('button', 'clear-board', '', 'Limpar');
const botaoLimpa = document.getElementById('clear-board');
elementMaker('section', 'pixel-board', '', '');
verify();
paint();

botaoLimpa.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
    pixels[i].classList.add('white');
    pixels[i].removeAttribute('style');
  }
});
botaoCriaGrid.addEventListener('click', () => {
  gridMaker(input.value);
});

window.onload = function start() {
  const inicio = document.getElementsByClassName('color0');
  standard();
  inicio[0].classList.add('selected');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].classList.add('white');
  }
  randomColor(cores);
};
