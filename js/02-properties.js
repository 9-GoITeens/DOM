const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Створення елемента (hero)
 * - Зображення
 * - Текст і textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log(imageEl);
  console.log(imageEl.src);
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'Це новий котик';
  const heroTitleEl = document.querySelector('.hero__title');
  console.log((heroTitleEl.textContent = 'Я солодкий пиріжечок)'));
});

/*
 * Атрибути
 * - get(і'мя-атрибута)
 * - set(і'мя-атрибута)
 * - remove(і'мя-атрибута)
 * - has(і'мя-атрибута)
 */

/*
 * Data-атрибути
 */
