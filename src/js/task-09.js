
const refs = {
  body: document.body,
  span: document.querySelector('.color'),
  btnChengeColor: document.querySelector('.change-color'),
}
refs.btnChengeColor.addEventListener('click', () => {
let hexColor = getRandomHexColor();
document.body.style.backgroundColor = hexColor;
refs.span.textContent = hexColor;
});
function getRandomHexColor(evt) {
return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
};