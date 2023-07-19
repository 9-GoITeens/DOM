const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) і document.querySelectorAll(selector)
 *   selector - будь який валідний CSS-селектор
 *
 * Що повертає?
 */

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('ul');
  console.dir(navEl);

  const navItemEl = document.querySelector('.site-nav__item');
  console.log(navItemEl);

  const navLinksEl = document.querySelectorAll('.site-nav__link');
  console.log(navLinksEl);
});

/*
 * Document.querySelector* і Element.querySelector*
 */
