// 1) Завадання
// отримати доступ до кнопки
const buttonEl = document.querySelector('.button');

console.log(buttonEl);
// доступ до текстового поля
console.log(buttonEl.textContent);
// змінюєм текст на кнопці
// buttonEl.textContent = 'Заміна назви';
console.log(buttonEl.textContent);
console.log(buttonEl);

// ______________________________________
// 2) Завдання
//  доступ до зображення
const imsgesEl = document.querySelector('.images');
// змінюэм значення атрибута "src"
// imsgesEl.src =
//   'https://images.pexels.com/photos/1797108/pexels-photo-1797108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
console.log(imsgesEl.src);

// ________________________________________
// 3) Завдання
// доступ до посилання
const linkEl = document.querySelector('.link');
// змінити значення атрибута "href"
console.log(linkEl.href);
// linkEl.href =
//   'https://www.jw.org/en/library/magazines/awake-no6-2016-december/';
console.log(linkEl);
console.log(linkEl.href);

// отримати доступ до зображення
const imgIizardEl = document.querySelector('.img-lizard');
console.log(imgIizardEl);
// // додати новий атрибут "alt" з описом зображення
// imgIizardEl.alt = 'lizard';
console.log(imgIizardEl.alt);

// ______________________________________________
// 4) Завдання
const listEl = document.querySelector('.list');
console.log(listEl);
// //доступ до першого елемента
const firstChild = listEl.firstElementChild;
console.log(firstChild);
// // змінити його вміст на новий текст
// firstChild.textContent = 'new item-1';
console.log(firstChild.textContent);

// ___________________________
buttonEl.addEventListener('click', () => {
  buttonEl.textContent = 'Заміна назви';
  imsgesEl.src =
    'https://images.pexels.com/photos/1797108/pexels-photo-1797108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  linkEl.href =
    'https://www.jw.org/en/library/magazines/awake-no6-2016-december/';
  imgIizardEl.alt = 'lizard';
  firstChild.textContent = 'new item-1';
});
