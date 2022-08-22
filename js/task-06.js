const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', hundlerTargetBlur);

function hundlerTargetBlur(event) {
    const elementsEl = event.currentTarget;
    const elementsEllength = Number(elementsEl.dataset.length);
    
    if (elementsEl.value.length === elementsEllength) {
      elementsEl.classList.remove('invalid');
      elementsEl.classList.add('valid');
    } else {
      elementsEl.classList.remove('valid');
      elementsEl.classList.add('invalid');
    }
    
}