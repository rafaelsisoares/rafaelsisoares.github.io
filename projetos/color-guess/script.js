const rgbColor = document.getElementById('rgb-color');
const circle = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const choice = document.getElementById('choice');
const reset = document.getElementById('reset-game');
const score = document.getElementById('num-score');

function generateRightColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  rgbColor.innerText = `rgb(${r}, ${g}, ${b})`;
}

function generateColor() {
  for (let i = 0; i < circle.length; i += 1) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    circle[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  const rightCircle = Math.round(Math.random() * 5);
  circle[rightCircle].style.backgroundColor = `${rgbColor.innerText}`;
}

choice.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === rgbColor.innerText) {
    answer.innerText = 'Acertou!';
    let points = parseFloat(score.innerText);
    points += 3;
    score.innerText = points.toString();
    generateRightColor();
    generateColor();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    generateRightColor();
    generateColor();
  }
});

reset.addEventListener('click', () => {
  generateRightColor();
  generateColor();
  answer.innerText = 'Escolha uma cor';
});

window.onload = () => {
  generateRightColor();
  generateColor();
};
