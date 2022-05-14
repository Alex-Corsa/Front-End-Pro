// var sizon = prompt("");

// switch (sizon) {
//     case "декабрь":
//     case "январь":
//     case "февраль": console.log("зима");
//         break;
//     case "март":
//     case "апрель":
//     case "май": console.log("весна");
//         break;
//     case "июнь":
//     case "июль":
//     case "август": console.log("лето");
//         break;
//     case "сентябрь":
//     case "октябрь":
//     case "ноябрь": console.log("осень");
//         break;
//     default: console.log("error!!!");
// }

// Преобразование типов
/*
var test = 5;
test = String(test); // '5'
test = Boolean(test); // true
test = Number(test); // 1
test = BigInt(test); // 1n
test = null(test); // ошибка, => последний тип данных;
test = undefined(test); // тип данных не определённ;
*/

// var a = 0;
// a = (typeof String); - что даёт?

// var a = 10;
// var b = 10;

// while - сначало читает условие, потом запускает процесс.
// while (a<b) {
//     a++; // step
//     console.log(a);
// }


// do while - снаало запускает процесс, потом читае условие.
// do {
//     a++; // step
//     console.log(a);
// } while (a<b);

// for (var i = 0; i < 14; ++i) {
//     console.log('1 =>', i)
// }

// for (var i = 0; ; ++i) {
//     if(i >= 14) break; // осановить
//     if(i%2 == 0) continue; // пропустить
//     console.log('1 =>', i)
// }

// var min = '',
//     max = '';

// for(;;) {
//     var userName = prompt('name?');
//     var userAge = +prompt('age?');
//     if(!userName || !userAge) break;
//     if(userAge >= 18) {
//         max = max + userName + " - " + userAge + ","    
//     } else {
//         min = min + userName + " - " + userAge + ","
//     }
// }

// console.log('<18', min);
// console.log('>18', max);

// -------------------------------------

// var min = '';
// var max = '';

// do {
//     var userName = prompt('name?');
//     var userAge = +prompt('age?');
//     if(userAge >= 18) {
//         max = max + userName + " - " + userAge + " , "
//     } else {
//         min = min + userName + " - " + userAge + " , "
//     }
// } while (confirm ('add user?')); // это запрос на то, чтобы добавить следующего пользователя.

// console.log(min);
// console.log(max);