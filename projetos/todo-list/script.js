const principal = document.getElementsByTagName('main');
const listaDeTarefas = document.getElementsByTagName('ol');
const entrada = document.getElementsByTagName('input');
const botoes = document.getElementsByTagName('button');
const selected = document.getElementsByClassName('selected');
const itens = document.getElementsByTagName('li');
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

function createList(conteudo) {
  if (conteudo !== null) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('tarefa');
    novoItem.innerText = conteudo;
    listaDeTarefas[0].appendChild(novoItem);
  }
}

function addClass(classe) {
  listaDeTarefas[0].lastElementChild.classList.add(classe);
}

elementMaker(
  'p',
  'funcionamento',
  '',
  'Clique duas vezes em um item para marcá-lo como completo',
);
elementMaker('input', 'texto-tarefa', '', '');
elementMaker('button', 'criar-tarefa', '', 'Criar Tarefa');
elementMaker('button', 'apaga-tudo', '', 'Limpar Lista');
elementMaker('button', 'remover-finalizados', '', 'Limpar Tarefas Finalizadas');
elementMaker('button', 'mover-cima', '', 'Mover para cima');
elementMaker('button', 'mover-baixo', '', 'Mover para baixo');
elementMaker('button', 'remover-selecionado', '', 'Limpar Tarefas Selecionadas');
elementMaker('button', 'salvar-tarefas', '', 'Salvar');
elementMaker('hr', '', '', '');
elementMaker('ol', 'lista-tarefas', '', '');

botoes[0].addEventListener('click', () => {
  createList(entrada[0].value);
  entrada[0].value = '';
});

botoes[1].addEventListener('click', () => {
  listaDeTarefas[0].innerHTML = '<ol id="lista-tarefas"';
  localStorage.clear();
});

botoes[2].addEventListener('click', () => {
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('completed')) {
      itens[i].remove();
      i -= 1;
    }
  }
});

botoes[3].addEventListener('click', () => {
  const selectedTask = document.getElementsByClassName('selected');
  if (selectedTask.length > 0) {
    const previousTask = selectedTask[0].previousElementSibling;
    if (previousTask !== null) {
      const change = previousTask.innerText;
      previousTask.innerText = selectedTask[0].innerText;
      selectedTask[0].innerText = change;
      selectedTask[0].classList.remove('selected');
      previousTask.classList.add('selected');
    }
  }
});

botoes[4].addEventListener('click', () => {
  const selectedTask = document.getElementsByClassName('selected');
  if (selectedTask.length > 0) {
    const nextTask = selectedTask[0].nextElementSibling;
    if (nextTask !== null) {
      const change = nextTask.innerText;
      nextTask.innerText = selectedTask[0].innerText;
      selectedTask[0].innerText = change;
      selectedTask[0].classList.remove('selected');
      nextTask.classList.add('selected');
    }
  }
});

botoes[5].addEventListener('click', () => {
  if (selected.length > 0) {
    listaDeTarefas[0].removeChild(selected[0]);
  }
});

botoes[6].addEventListener('click', () => {
  for (let i = 0; i < itens.length; i += 1) {
    localStorage.setItem(i.toString(), itens[i].innerText);
    if (itens[i].classList.contains('selected')) {
      localStorage.setItem(`selected${i.toString()}`, 'true');
    }
    if (itens[i].classList.contains('completed')) {
      localStorage.setItem(`completed${i.toString()}`, 'true');
    }
  }

  console.log('Suas tarefas foram salvas.');
});
listaDeTarefas[0].addEventListener('click', (event) => {
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

listaDeTarefas[0].addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

window.onload = function start() {
  for (let i = 0; i < localStorage.length; i += 1) {
    createList(localStorage.getItem(i.toString()));
    if (localStorage.getItem(`selected${i}`) === 'true') {
      addClass('selected');
    }
    if (localStorage.getItem(`completed${i}`) === 'true') {
      addClass('completed');
    }
  }
};
