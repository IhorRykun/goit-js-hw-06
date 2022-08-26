const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryEl = document.querySelector(".gallery");
const imagesEl = images.map(img => {
    const listEl = galleryEl.insertAdjacentHTML(
        "beforeend",
        `<li class="img__item"><img src='${img.url}', alt='${img.alt}' width = "640", height = "480"></li>`);
    return listEl;
});
galleryEl.style.cssText = 'display:flex';

// const galleryEl = document.querySelector('.gallery');
// const masEl = [];

// for (const el of images) {
//     const listEl = galleryEl.insertAdjacentHTML('beforeend', `<li class="img__item"><img src='${el.url}', alt='${el.alt}' width = "640", height = "480"></li>`);
//     masEl.push(listEl);
// }
// galleryEl.style.cssText = 'display:flex; align-item:center;list-style:none';

// console.log(galleryEl);

// galleryEl.append("listEl");

// const itemImg = document.querySelectorAll(".img__item");
// console.log(itemImg);