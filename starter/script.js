'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

//working with const account that is beyond. const accounts = [account1, account2, account3, account4];
//each function should receive the data that is going to work with instead of a global variable
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

btnLogin.addEventListener('click', function (e) {
  //prevent from submitting
  e.preventDefault();
  accounts.find(acc => acc.owner === inputLoginUserName);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//EQUALITY
console.log(movements.includes(-130));

//Condition
console.log(movements.some(mov => mov === -130));
const anyDeposit = movements.some(mov => mov > 1500);
console.log(anyDeposit);

//Every
console.log(movements.every(mov => mov > 0));

//Sepaarate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

/* //Flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //Flat two levels */

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);
[0, 1, 10, 2, 20, 3, 30];

console.log(movements);

//return < 0, a, b keep order
//return > 0, a, b switch order

/* //Ascending

//Instead of this
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b < a) return -1;
});
//We write this
movements.sort((a, b) => a - b);

//Descending

//instead of this
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b < a) return 1;
});
//we write this
movements.sort((a, b) => b - a);
 
console.log(movements);*/
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//empty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
arr.fill(23, 4, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
/* 
const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); */

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAlll('.movements__value'),
    el => Number(el.texContent.replace('€', ''))
  );

  console.log(movementsUI);

  //const movementsUI2 = [...document.querySelectorAlll('.movements__value')];
});

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur);
console.log('bankDepositSum', bankDepositSum);

//2
/* const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; */
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  /* .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); */
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

//3 Reduce
/* const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  ); */

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      /*  cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); */
      sums[cur > 0 ? 'deposits' : 'withdrawals'];
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log('d w', deposits, withdrawals);

//4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
