/*
 * Властивість innerHTML
 * - читати
 * - запис
 */

const titleEl = document.querySelector('.title');
// titleEl.innerHTML = '<a href="">Це ссилка)</a>';
// titleEl.innerHTML = '';

/*
 * Вставка размітки з insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Це силка)</a>',
);
