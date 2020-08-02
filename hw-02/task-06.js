const numbers = [];
let input;
let total = 0;

while (input !== null) {
  input = prompt("Введіть число.");

  if (input !== null) {
    numbers.push(input);
  }
}

if (numbers.length !== 0) {
  for (let number of numbers) {
    total += Number(number);
  }
  console.log(`Общая сумма чисел равна [${total}]`);
} else {
  console.log("Вы не ввели число!");
}
