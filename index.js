const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// 1. Знайти суму та кількість позитивних елементів

let sum = 0;
let amount = 0;
array.forEach((item) => {
  if (item < 0) return;
  sum += item;
  amount += 1;
});
console.log(`sum: ${sum}, amount: ${amount}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

let min = array.reduce((acc, item) => (acc < item ? acc : item));
console.log(`мінімальний елемент масиву: ${min}`);
console.log(`порядковий номер: ${array.indexOf(min)}`);

// 3.Знайти максимальний елемент масиву та його порядковий номер

let max = array.reduce((acc, item) => (acc > item ? acc : item));
console.log(`максимальний елемент масиву: ${max}`);
console.log(`порядковий номер: ${array.indexOf(max)}`);

// 4. Визначити кількість негативних елементів.
let negativeNumber = array.reduce((accum, item) => {
  if (item < 0) {
    accum += 1;
  }
  return accum;
}, 0);
console.log(`кількість негативних елементів: ${negativeNumber}`);

// 5. Знайти кількість непарних позитивних елементів.

let amountOddNumbers = array.reduce((accum, item) => {
  if (item % 2 === 1 && item > 0) {
    accum += 1;
  }
  return accum;
}, 0);
console.log(`кількість непарних позитивних елементів: ${amountOddNumbers}`);

// 6. Знайти кількість парних позитивних елементів.

let amountEvenNumbers = array.reduce((accum, item) => {
  if (item % 2 === 0 && item > 0) {
    accum += 1;
  }
  return accum;
}, 0);
console.log(`кількість парних позитивних елементів: ${amountEvenNumbers}`);

// 7. Знайти суму парних позитивних елементів.

let sumEvenNumbers = array.reduce((accum, item) => {
  if (item % 2 === 0 && item > 0) {
    accum += item;
  }
  return accum;
}, 0);
console.log(`сума парних позитивних елементів: ${sumEvenNumbers}`);

// 8. Знайти суму непарних позитивних елементів.

let sumOddNumbers = array.reduce((accum, item) => {
  if (item % 2 === 1 && item > 0) {
    accum += item;
  }
  return accum;
}, 0);
console.log(`сума непарних позитивних елементів: ${sumOddNumbers}`);

// 9. Знайти добуток позитивних елементів.

let multPositiveNumbers = array.reduce((accum, item) => {
  if (item > 0) {
    accum *= item;
  }
  return accum;
});
console.log(`добуток позитивних елементів: ${multPositiveNumbers}`);

// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.

let maxElement = array.reduce((accum, item) => (accum > item ? accum : item));
console.log(maxElement);
console.log(array.map((item) => (item === maxElement ? maxElement : 0)));
// console.log(array.splice(0, array.indexOf(maxElement) + 1)); - удеалене всех элементов, после максимкального
