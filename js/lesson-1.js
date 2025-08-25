// alert("hello")

// const login = prompt(`login:`)
// console.log(login);

// const check = confirm('are you sure?');
// console.log(check);

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt(`введіть число:`));
// if(number === 10){
//     alert("вірно");}
//     else {
//           alert("ne вірно");
//     }

2;
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if(min <= 15){
//     alert(`${min} ви потрапили в першу чверть`)
// } else if(min <= 30){
//     alert(`${min} ви потрапили в другу чверть`)
// }
// else if(min <= 45) {
//     alert(`${min} ви потрапили в третю чверть`)
// }
// else if(min <= 59) {
//      alert(`${min} ви потрапили в четверту чверть`)

// }

3;
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let num = Number(prompt("Введіть число(1-4):"));

// let result;
// switch(num) {

// case 1:
//     result = 'зима';
//     break;
//     case 2:
//     result = 'весна';
//     break;
//     case 3:
//     result = 'літо';
//     break;
//     case 4:
//     result = 'осінь';
//     break;
//     default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

4;
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const num = Number(prompt(`Скільки хвилин?`));
// const hours = Math.floor(num / 60);
// const minutes = num % 60;
// const changeHours = String(hours).padStart(2, `0`);
// const chengeMin = String(minutes).padStart(2, `0`);

// console.log(`${changeHours}:${chengeMin}`)
// console.log(minutes)

// минуты 180 если то выйдет 0 если 185 = 5 если 222 равно 42const minutes = num % 60;
//  180 если то выйдет 0 если 185 = 5 если 222 равно

5;
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть логін:');
// console.log(login);

// if (login === 'Адмін') {
//   const pass = prompt('Введіть пароль:');

//   if (pass === 'я головний') {
//     alert('добрий день!');
//   } else {
//     alert(`Невірний пароль!`);
//   }}

// else if (login === null || login === '') {
//   alert('Скасовано');
// } else {
//     alert(`"Я вас не знаю"`)}

6;
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// while(i <= 20) {
//      console.log(i)
//     i ++
// }

7;
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//      console.log(sum);

// }
// getNumbers(1, 100)

8;
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {

// let firstNumber = a;
// let secondNumber = b;

// if(firstNumber = Number(firstNumber)){
//   if(firstNumber < secondNumber) {
//     return firstNumber;
//   }
// } else {
//   return "Not a number"
// }
// if(secondNumber = Number(secondNumber)){
//   if(secondNumber < firstNumber) {
//     return secondNumber;
//   }
// } else {
//   return "Not a number"
// }
// }
// console.log(min(7, 8));

// function min(a, b){
//   if(typeof a === `number` && typeof b === 'number') {
//     if(a < b){
//       return a;
//     }
//     if(b < a){
//       return b;
//     }
//   } else {
//     return "Not a number";
//   }
// }
// console.log(min(6, 7))

9;
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   let checkAge = age;
//   if(checkAge >= 18) {
//     console.log(true)
//   } else {
//     console.log(confirm("Wam e 18?"))
//   }
// }
// console.log(isAdult());

10;
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzbuzz(num) {
//   if (num >= 1) {
//     if (num % 3 === 0) {
//       console.log(`fizz`);
//     } 
//     if (num % 5 === 0) {
//       console.log(`buzz`);
//     }
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log(`fizzbuzz`);
//     }
//   }
// }


// function fizzbuzz(num) { 

//   for(let i = 1;i <= num;i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`fizzbuzz`);
//      } else if(i % 3 === 0){
//  console.log(`fizz`);
//   } 
//   else if(i % 5 === 0){
//      console.log(`buzz`);
//   }
// }
// }
// console.log(fizzbuzz(100))