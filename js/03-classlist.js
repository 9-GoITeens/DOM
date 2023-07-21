const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКЛас)
 * - contains(клас)
 */

// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.site-nav');

//   console.log(navEl.classList.add('super-cool', 'hello'));
// });

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList.add('super-cool', 'hello'));
// navEl.classList.remove('super-cool');
// navEl.classList.remove('site-nav');
// navEl.classList.replace('super-cool', 'super');
// console.log(navEl.classList.contains('super-cool'));

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('hello');
// });

const currentPageUrl = '/about';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
