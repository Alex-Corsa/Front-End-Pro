/*
Задача № 1.
Условие:
В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
Решение:
*/
alert("Task 1");
alert("Find out what quarter of an hour it is.");
var min = +prompt("Write any number from 0 to 59", "For example 25");
console.log(min);
if (min >= 0 && min <=14) {
    alert("1 am a quarter of an hour")
    console.log("1 am a quarter of an hour")
} else if (min >= 15 && min <=29) {
    alert("2 am a quarter of an hour")
    console.log("2 am a quarter of an hour")
} else if (min >= 30 && min <=44) {
    alert("3 am a quarter of an hour")
    console.log("31 am a quarter of an hour")
} else if (min >= 45 && min <=59) {
    alert("4 am a quarter of an hour")
    console.log("4 am a quarter of an hour")
} else if(min < 0 && min >= 60){
    alert("error! There are no 60 or more minutes in an hour. Try once more.")
    console.log('error')
};

/*
Задача № 2.
Условие:
Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном '1', 1, 3.
*/

alert("Task 2");
var a = +prompt("Write the number 1", "1");
if (a == 1) {
    alert("Верно")
    console.log(true)
} else if (a != 1) {
    alert("Не верно")
    console.log(false)
};

/*
Задача № 3.
Условие:
Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при test, равном true, false. 
Напишите два варианта скрипта - с короткой записью (тернарное выражение) и с длинной.
Решение:
*/

var test = confirm('Yes or no?');

if (test != true){
    alert('Верно')
    console.log(true)
} else {
    alert('Не верно')
    console.log(false)
};

// тернарное выражение
test != true ? alert('Верно') : alert('Не верно');

/*
Задача № 4.
Условие:
Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 5, 0, -3, 2.
Решение:
*/

alert("Task 4");
var a = prompt();
if (a >= 1 && a <= 4) {
    console.log("Верно")
} else if (a != [1], [2], [3], [4]) {
    console.log("Не верно")
};

/*
Задача № 5.
Условие:
Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
Решение:
*/

alert("Task 5");

var num = prompt("Number?");
console.log(num)
if (num == 1){
    result = "зима"
    console.log(num)
} else {
    if (num == 2){
        result = "весна"
        console.log(num)
    }

    if (num == 3){
        result = "лето"
        console.log(num)
    }

    if (num == 4){
        result = "осень"
        console.log(num)
    }
};

alert(result);
console.log(result)

// Дополнительные вопросы:
// В чём ошибка? Почему не работает этот код (соответвствие месяца и сизона)?

// alert("Напиши любой месяц");
// var sizon = prompt("Например 'январь'");
// console.log(sizon);
// if (sizon == ["декабрь"], ["январь"], ["февраль"]){
//     console.log("зима")
//     result = "зима"
// } else if(sizon == ["март"], ["апрель"], ["май"]){
//     console.log("весна")
//     result = "весна"
// } else if(sizon == ["июнь"], ["июль"], ["август"]){
//     console.log("лето")
//     result = "лето"
// } else if(sizon == ["сентябрь"], ["октябрь"], ["ноябрь"]){
//     console.log("осень")
//     result = "осень"
// };

/*
Так код работает. Но стоит добавть ещё месяца - и он ломается.
if (sizon == "январь"){
    console.log("зима")
    result = "зима"
} else if(sizon == "март"){
    console.log("весна")
    result = "весна"
} else if(sizon == "июнь"){
    console.log("лето")
    result = "лето"
} else if(sizon == "сентябрь"){
    console.log("осень")
    result = "осень"
};
*/