const inputEl = document.querySelector(`#name-input`); 
console.log(inputEl);

const spanEl = document.querySelector("#name-output");
// console.log(spanEl);

inputEl.addEventListener(`input`, onInputValue);


function onInputValue(event) {
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if (spanEl.textContent === '') {    
        spanEl.textContent = "Anonymous";
    }
}