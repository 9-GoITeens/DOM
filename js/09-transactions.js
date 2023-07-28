import transactionsHistory from './data/transactions.js';

//    <tr>
//      <th>ID транзакції</th>
//      <th>Сума</th>
//      <th>Дата</th>
//      <th>Хто</th>
//      <th>Тип транзації</th>
//      <th>І'мя рахунку</th>
//      <th>Номер рахунку</th>
//    </tr>;

//   {
// id: '758d5283-358e-4fbb-b222-a17fd04e8916',
// amount: '179.07',
// date: '2012-02-01T22:00:00.000Z',
// business: 'Bogan - DuBuque',
// name: 'Auto Loan Account 7313',
// type: 'deposit',
// account: '19808943',
//   },

const makeTransationTbleRowMarkap = transation => {
  const { id, amount, date, business, name, type, account } = transation;
  return `
     <tr>
     <th>${id}ції</th>
     <th>${amount}/th>
     <th>${date}/th>
     <th>${business}</th>
     <th>${name}</th>
      <th>${type}</th>
     <th>${account}</th>
   </tr>;
    `;
};

// console.log(transactionsHistory);
// console.log(makeTransationTbleRowMarkap(transactionsHistory[1]));

const transactionsTableRowsMarkup = transactionsHistory
  .map(makeTransationTbleRowMarkap)
  .join('');

const tableEl = document.querySelector('.js-transaction-table');
console.log(tableEl);

tableEl.insertAdjacentHTML('beforeend', transactionsTableRowsMarkup);
console.log(transactionsTableRowsMarkup);
