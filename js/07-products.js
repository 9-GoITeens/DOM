/*
 * Створюємо карточку продукта
 * - В класі продукта може бути product--on-sale product--not-available
 */

const product = {
  name: 'Сервопроводи',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
  onSale: true,
};

{
  /*
<article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p class= 'product__price'>Ціна: 1111 кредитів</p>
</article>
*/
}

const podacktEl = document.createElement('article');
podacktEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.classList.add('product__name');
nameEl.textContent = product.name;

const textEl = document.createElement('p');
textEl.classList.add('product__descr');
textEl.textContent = product.description;

const priceEl = document.createElement('p');
priceEl.classList.add('product__price');
priceEl.textContent = product.price;

podacktEl.append(nameEl, textEl, priceEl);

console.log('podacktEl', podacktEl);
// console.log(nameEl);
// console.log(textEl);
// console.log(priceEl);

/*
 * Пишемо функцію для створення карточки продукту
 */
