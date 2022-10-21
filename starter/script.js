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
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}EUR`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
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

/* const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};

console.log(createUsernames('Steven Thomas Williams')); */
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// Coding Challenge #1

/* 
  Julia and Kate are doing a study on dogs. 
  So each of them asked 5 dog owners about their dog's age, 
  and stored the data into an array (one array for each). For now, 
  they are just interested in knowing whether a dog is an adult or a puppy. 
  A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
  
  Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
  and does the following things:
  
  1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
   So create a shallow copy of Julia's array, and remove the cat ages from that copied array
    (because it's a bad practice to mutate function parameters)
  2. Create an array with both Julia's (corrected) and Kate's data
  3. For each remaining dog, log to the console whether it's an adult
   ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  4. Run the function for both test datasets
  
  HINT: Use tools from all lectures in this section so far 😉
  
  TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
  TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
  
  GOOD LUCK 😀
  */
/* const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
  
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  }; */

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const totalDogs = dogsJuliaCorrected.concat(dogsKate);
  totalDogs.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else console.log(`Dog number ${i + 1} is a puppy, and is ${dogAge} years old`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/* for (const movement of movements) {
    for (const [i, movement] of movements.entries())
      if (movement > 0) {
        console.log(` Movement ${i + 1} you deposited ${movement}`);
      } else {
        console.log(`you withdrew ${Math.abs(movement)}`);
      }
  } */

/* console.log('FOREACH');
  movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
      console.log(` Movement ${i + 1} you deposited ${mov}`);
    } else {
      console.log(`you withdrew ${Math.abs(mov)}`);
    }
  });
   */

//0: function(200)
//1: function(450)
//2: function(400)

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//map
/* Two different paradigms. With the map we are using a function (functional programming) and with the for of loop we are loopong over an array and creating another one manually */

const eurToUsd = 1.1;
const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

/* const movementsUSDfor = [];
  for (const mov of movement) movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
   */
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
//filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log('deposits', deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log('depositsFor', depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log('withdrawals', withdrawals);

//reduce

console.log(movements);
// accumulator -> snowball
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value Reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

const average = movements.reduce(function (acc, mov) {
  return (acc + mov) / movements.length;
}, 0);
console.log(average);

// Coding Challenge #2

/* 
  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages
   to human ages and calculate the average age of the dogs in their study.
  
  Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
   and does the following things in order:
  
  1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years
   old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
  2. Exclude all dogs that are less than 18 human years old
   (which is the same as keeping dogs that are at least 18 years old)
  3. Calculate the average human age of all adult dogs 
  (you should already know from other challenges how we calculate averages 😉)
  4. Run the function for both test datasets
  
  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
  
  GOOD LUCK 😀
  */
/* const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
    return average;
  };
   */
/* Another way using the last parameter (array) of the reduce method
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  ); */
/* Challenge 3: we cannoy do const average = adults.reduce((acc, age) => acc + age, 0) / adults.length because when chaining methods after the filter we do not have access any more to the adults array */
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log('average', avg1, avg2);

//chaining
/* const eurToUsd = 1.1; */
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
//filter
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const account of accounts)
  if (account.owner === 'Jessica Davis') {
    break;
  }
console.log(account);

/////////////////////////////////////////////////

//slice
/* let arr = ['a', 'b', 'c', 'd', 'e'];
  console.log(arr.slice(2));
  console.log(arr.slice(2, 4));
  console.log(arr.slice(-2));
  console.log(arr.slice(1, -2));
  console.log(arr.slice());
  console.log([...arr]);
   */
//splice
/* console.log(arr.splice(2)); */
/* arr.splice(-1);
  console.log(arr);
  arr.splice(1, 2); en splice cuando hay 2 parámetros ,el primer parámetro es para posicionar y el segundo es el número de elementos a eliminar
  console.log(arr);
   */
//Reverse
/* arr = ['a', 'b', 'c', 'd', 'e'];
  const arr2 = ['j', 'i', 'h', 'g', 'f'];
  console.log(arr2.reverse());
  console.log(arr2);
  
  //concat
  const letters = arr.concat(arr2);
  console.log(letters);
  
  //join
  console.log(letters.join(' - '));
  
  
   */
