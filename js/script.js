/* Tasc № 1 
Условие:
В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()). 
Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше», «второе число меньше». 
Если пользователь ввёл не число, выводится фраза «первый ввод – не число» (или «второй ввод – не число»), и выполнение скрипта прекращается.
Решение:
*/

function comparison (number_1, number_2) {
    if (number_1 == number_2) {
        alert("Числа равны");
    }
    
    if (number_1 > number_2) {
        alert("Первое число больше");
    }
    
    if (number_1 < number_2) {
        alert("Второе число больше");
    }
// можно ли for писать внутри function? Или for писать вне function. Код работает и так и так. Но, как правильно?
    for (;;) {    
        var number_1 = +prompt("Number 1?");
        var number_2 = +prompt("Number 2?");
        if (!number_1) {
            alert("первый ввод – не число");
            break;
        }
        if (!number_2) {
            alert("второй ввод – не число");
            break;
        }
        console.log(calc(number_1, number_2))
    }
}


/* Tasc № 2 
Условие:
Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10), количество квартир на лестничной площадке (1-20). 
Скрипт запрашивает эти показатели и номер квартиры. 
Выводится номер подъезда, в котором находится указанная квартира. 
При вводе некорректных данных предусмотреть генерацию исключительных ситуаций.
Решение:
*/

function house (numberOfStoreys, numberOfEntrances, apartmentPerFloor, apartmentNumber){
    var set = numberOfStoreys * apartmentPerFloor,
        house = numberOfStoreys * numberOfEntrances * apartmentPerFloor * apartmentNumber,
        n = 1;

for (;;){    
    if (apartmentNumber <= house){
      if (apartmentNumber <= (set * n)){
        alert('Подъезд ' + n);
        break;
    } else {
        n = n + 1;

        if (n > numberOfEntrances) {
        alert('Число квартиры слишком велико');
        break;
        }
    }
    }
}
}

function check (min, max, value){
return((min && max && value) && (min <= value && value <= max))
}


for(;;){
var numberOfStoreys = +prompt('Этажность?');

if (!check(1, 25, numberOfStoreys)) {
    alert('этажность – недопустимое значение');
    break;
}

var numberOfEntrances = +prompt('Количество подъездов?');

if (!check(1, 10, numberOfEntrances)) {
    alert('этажность – недопустимое значение');
    break;
}

var apartmentPerFloor = +prompt('Квартир на этаж?');

if (!check(1, 20, apartmentPerFloor)) {
    alert('квартир на этаж – недопустимое значение');
    break;
}

var apartmentNumber = +prompt('Номер квартиры?');

if (!check(1, 5000, apartmentNumber)) {
    alert('номер квартиры – недопустимое значение');
    break;
}

console.log(house(numberOfStoreys, numberOfEntrances, apartmentPerFloor, apartmentNumber))
}

/* Tasc № 3 
Условие:
Написать функцию, получающую на вход два числа.
Если оба числа чётные - функция возвращает их произведение.
Если оба числа нечётные - функция возвращает их сумму. 
Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
Решение:
*/

function twoNumbers (firstNumber, secondNumber){
if (firstNumber%2 == 0 && secondNumber%2 == 0) {
    alert(firstNumber*secondNumber);
}

if (firstNumber%2 != 0 && secondNumber%2 != 0) {
    alert(firstNumber+secondNumber);
}

if (firstNumber%2 == 0 && secondNumber%2 != 0) {
    alert(secondNumber);
} 
if (firstNumber%2 != 0 && secondNumber%2 == 0) {
    alert(firstNumber)
}
}

for(;;){
var firstNumber = +prompt('Number 1?');

if (!firstNumber) {
    alert('первый ввод – не число');
    break;
}

var secondNumber = +prompt('Number 2?');

if (!secondNumber) {
    alert('второй ввод – не число');
    break;
}

console.log(twoNumbers(firstNumber, secondNumber))
}

/* Tasc № 4 
Условие:
На декартовой плоскости прямоугольник задаётся четырьмя точками – своими вершинами (у каждой точки две числовые координаты).
Вершины перечисляются последовательно, в порядке обхода по часовой стрелке, начиная с левой верхней вершины.
Написать функцию, проверяющую, образуют ли заданные восемь чисел вершины некоего прямоугольника.
Решение:
*/

function rectangle (x1, y1, x2, y2, x3, y3, x4, y4){
if (x1 == x4 && x2 == x3 && y1 == y2 && y3 == y4){
    alert('Это прямоугольник!');
} else {
    alert('Это не прямоугольник');
}
}

for(;;){
var x1 = +prompt('Значение оси х верхнего левого угла?');

if (!x1) {
    alert('первый х – не число');
    break;
}

var y1 = +prompt('Значение оси y верхнего левого угла?');

if (!y1) {
    alert('первый у – не число');
    break;
}

var x2 = +prompt('Значение оси х верхнего правого угла?');

if (!x2) {
    alert('второй х – не число');
    break;
}

var y2 = +prompt('Значение оси y верхнего правого угла?');

if (!y2) {
    alert('второй у – не число');
    break;
}  

var x3 = +prompt('Значение оси х нижнего правого угла?');

if (!x3) {
    alert('третий х – не число');
    break;
}

var y3 = +prompt('Значение оси y нижнего правого угла?');

if (!y3) {
    alert('третий у – не число');
    break;
}

var x4 = +prompt('Значение оси х нижнего левого угла?');

if (!x4) {
    alert('четвертый х – не число');
    break;
}

var y4 = +prompt('Значение оси y нижнего левого угла?');

if (!y4) {
    alert('четвертый у – не число');
    break;
}

console.log(rectangle(x1, y1, x2, y2, x3, y3, x4, y4))
}

/* Tasc № 5 
Условие:
Функция getSequence(start, step) при вызове возвращает функцию-генератор.
Каждый вызов генератора возвращает новое число в числовой последовательности.
start – стартовое число (по умолчанию 0).
step – шаг приращения (по умолчанию 1).
Решение:
*/

var start = +prompt("Start number?");
var step = +prompt("Step number?");

function generator (s1, s2){
    s1 = s1 + s2;
    start = s1;
    confirm(start);
}

function getSequence(s1, s2) {
    generator(s1, s2);
}

if (!start) {
    alert("Start not a number");
    start = 0;
}

if (!step){
    alert("Step not a number");
    step = 1;
}

for (;;){
    getSequence(start, step)
}