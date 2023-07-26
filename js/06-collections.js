/*
 * Створюємо і додаєм колекцію
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');
const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.classList.add('color-picekr__option');

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.classList.add('color-picekr__option');

//   return buttonEl;
// });

// console.log(elements);
// colorPickerContainerEl.append(...elements);
// console.log(colorPickerContainerEl);

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.classList.add('color-picekr__option');
// console.log(buttonEl);

/*
 * Пишемо функцію для створення размітки колорпікера
 */
const makeColorPickerOptions = option => {
  return option.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    buttonEl.classList.add('color-picekr__option');

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);
