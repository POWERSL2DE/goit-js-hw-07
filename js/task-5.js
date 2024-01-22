function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
