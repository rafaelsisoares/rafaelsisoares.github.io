const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const mainContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

inputText.addEventListener('keyup', (event) => {
  memeText.innerText = event.target.value;
});

inputImage.addEventListener('input', (event) => {
  const input = event.target;
  const getImage = new FileReader();
  getImage.onload = () => {
    const path = getImage.result;
    memeImage.src = path;
  };
  getImage.readAsDataURL(input.files[0]);
});

btnFire.addEventListener('click', () => {
  mainContainer.removeAttribute('class');
  mainContainer.classList.add('fire');
});

btnWater.addEventListener('click', () => {
  mainContainer.removeAttribute('class');
  mainContainer.classList.add('water');
});

btnEarth.addEventListener('click', () => {
  mainContainer.removeAttribute('class');
  mainContainer.classList.add('earth');
});

meme1.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});

meme2.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});

meme3.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});

meme4.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});
