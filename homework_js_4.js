// // 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];

// let currDay = 0;
// while (confirm(`${days[currDay]}. Хочете побачити наступний день?`)) {
//   currDay = (currDay + 1) % 7;
// }

// let day = "Понеділок";
// let i = 1;
// do {
//   switch (i) {
//     case 1:
//       if (i == 1) {
//         day = "Понеділок";
//         i++;
//       }
//       break;
//     case 2:
//       if (i == 2) {
//         day = "Вівторок";
//         i++;
//       }
//       break;
//     case 3:
//       if (i == 3) {
//         day = "Середа";
//         i++;
//       }
//       break;
//     case 4:
//       if (i == 4) {
//         day = "Четвер";
//         i++;
//       }
//       break;
//     case 5:
//       if (i == 5) {
//         day = "Пятниця";
//         i++;
//       }
//       break;
//     case 6:
//       if (i == 6) {
//         day = "Субота";
//         i++;
//       }
//       break;
//     case 7:
//       if (i == 7) {
//         day = "Неділя";
//         i = 1;
//       }
//       break;
//   }
// } while (confirm(`${day}. Хочете побачити наступний день?`));
// // 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// for (let i = 2; i <= 9; i++){
//   let rez = ''
//   console.log(i)
//   for (let j = 1; j <= 10; j++){
//     rez += i * j + ' '
//   }
//   console.log(rez)
// }
// // 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
// let num = parseInt(prompt("Enter number: ")),
//   min = 0,
//   max = 100,
//   N = 0;
// console.log(num);
// if (num >= 0 && num <= 100) {
//   while (N != num) {
//     N = parseInt((min + max) / 2);
//     znak = prompt(`Ваше число > ${N}, < ${N} или == ${N}? \nQuit = x`);
//     switch (znak) {
//       case "<":
//         max = N;
//         break;
//       case ">":
//         min = N + 1;
//         break;
//       case "==":
//         N = num;
//         console.log(`Ваше число = ${N}`);
//         break;
//       case "x":
//         N = num;
//         break;
//       default:
//         alert("Invalid Data!");
//     }
//   }
// } else {
//   alert("Invalid Data!!!");
// }

//// Найти сумму четных цифр числа Задача Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.
// let temp = parseInt(prompt("Enter number:")),
//   summa = 0;
// while (temp > 0) {
//   d = temp % 10;
//   temp = (temp - d) / 10;
//   if (d % 2 == 0) {
//     summa += d;
//   }
// }
// console.log(`Сумма парних цифр вашого числа = ${summa}`);

// // Посчитать четные и нечетные цифры числа Задача Написать программу, подсчитывающую количество четных и нечетных цифр в числе.
// let temp = parseInt(prompt("Enter number:"));
// summa = 0;
// i = 0;
// even = 0;
// odd = 0;
// while (temp > 0) {
//     d = temp % 10;
//     temp = (temp - d) / 10;
//     if (d % 2 == 0){
//       even++
//     }
//     else{
//       odd++
//     }
//   }
// console.log(`Парних цифр у числі ${even}, а непарних ${odd}`)

// //Составить таблицу значений функции y = 5 - x2/2 на отрезке [-5; 5] с шагом 0.5.
// console.log(" x      y");
// for (let x = -5; x <= 5; x += 0.5) {
//   let xEdit = x.toFixed(1);
//   if (xEdit.length < 4) {
//     xEdit = " " + xEdit;
//   }
//   y = 5 - x ** 2 / 2;
//   let yEdit = y.toFixed(1);
//   if (yEdit.length < 4) {
//     yEdit = " " + yEdit;
//   }
//   console.log(`${xEdit} | ${yEdit}`);
// }
