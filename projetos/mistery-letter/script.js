const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];
const btnGenerate = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');

function generateLetter(phrase) {
  if (phrase[0] === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
    counter.innerText = 0;
  } else {
    phrase.forEach((word) => {
      const newWord = document.createElement('span');
      newWord.innerText = `${word}`;
      newWord.classList.add(
        style[Math.floor(Math.random() * style.length)],
        size[Math.floor(Math.random() * size.length)],
        rotate[Math.floor(Math.random() * rotate.length)],
        skew[Math.floor(Math.random() * skew.length)],
      );
      letter.appendChild(newWord);
    });
    counter.innerText = `${phrase.length}`;
  }
}

btnGenerate.addEventListener('click', () => {
  const arrPhrase = inputLetter.value.split(' ');
  letter.innerText = '';
  generateLetter(arrPhrase);
});

letter.addEventListener('click', (event) => {
  if (!event.target.id) {
    event.target.removeAttribute('class');
    event.target.classList.add(
      style[Math.floor(Math.random() * style.length)],
      size[Math.floor(Math.random() * size.length)],
      rotate[Math.floor(Math.random() * rotate.length)],
      skew[Math.floor(Math.random() * skew.length)],
    );
  }
});
