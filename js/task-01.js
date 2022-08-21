const catEl = document.querySelector("#categories");
const catElChildEl = catEl.children;
// console.log(catEl);
console.log(`Number of categories:`, catElChildEl.length);

const liItemEl = catElChildEl;
for (let item of liItemEl) {
    console.log("category:", item.firstElementChild.textContent);
    console.log("element:", item.lastElementChild.children.length);
}







