const numbers = ["a", "b", "c"];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
