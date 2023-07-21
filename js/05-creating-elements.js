/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки)';
console.log('titleEl', titleEl);

/*
 * Створюєм картинку
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.width = 320;
console.log(imageEl);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);
// heroEl.appendChild(imageEl);

console.log(heroEl);

/*
 * Створюємо і додаємо новий пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/my-blog';

navItemEl.appendChild(navLinkEl);

// console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

// console.log(navEl);

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.children[2]);
