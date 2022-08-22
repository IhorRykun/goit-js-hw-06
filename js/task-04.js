const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector(`#value`);
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener(`click`, clickDecrementBtn);


incrementBtn.addEventListener(`click`, clickIncrementBtn);


 function clickDecrementBtn() {
   counterValue.decrement();
   valueEl.textContent = counterValue.value;
}


function clickIncrementBtn() {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
}