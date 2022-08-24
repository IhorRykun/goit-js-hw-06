function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('.widget');
console.log(divEl);
const btnEl = document.querySelector(".change-color");
console.log(btnEl);
const spanEl = document.querySelector('.color');

btnEl.addEventListener("click", onClickBtn);


function onClickBtn() {
    spanEl.textContent = getRandomHexColor();
    document.body.setAttribute(
        'style',
        "  background-color:" + spanEl.textContent);
}


