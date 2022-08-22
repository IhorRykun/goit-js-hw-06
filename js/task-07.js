const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");


inputEl.addEventListener("blur", onBlur);


function onBlur(event) {
    spanEl.style.fontSize = event.currentTarget.value+'px';

}