// Странный калькулятор

/*
Tasc № 1
С помощью promt спрашиваем у пользователя что он хочет сделать (+ - / *).
Спрашиваем до тех пор пока он введет допустимое значение.

Tasc № 2
Cпрашиваем сколько операндов он хочет использовать.
Это должно быть число больше 1. 
Спрашиваем пока пользователь не введет допустимое значение.

Tasc № 3
Cпрашиваем у пользователя каждый операнд. 
Это должно быть число. 
Спрашиваем пока пользователь не введет допустимое значение.

Tasc № 4
С помощью alert или console.log выводим результат действия (+ - / *) со всеми операндами.
*/

// Решение:

var binaryOperator  = "";

for (;;){
    binaryOperator = prompt("What to do?");
    if (binaryOperator == "+" || binaryOperator == "-" || binaryOperator == "/" || binaryOperator == "*" ) break;
}
console.log("binaryOperator:", binaryOperator);

var numberOfOperators = 0;

for (;;){
    numberOfOperators = +prompt('How many operators?') -1;
    if (numberOfOperators >= 1) break;
}
// console.log("you wrote", numberOfOperators, "operators");

for (;;){
    result = +prompt('First number?');
    if (typeof(result) == 'number') break;
}

for (var i = 0; i < numberOfOperators; i++) {
    var nextNumder = +prompt('Next number?');
    if (!nextNumder) {
        alert('Error');
        break;
    }
    switch (binaryOperator){
        case '+': result = result + nextNumder;
            break;
        case '-': result = result - nextNumder;
            break;
        case '/': result = result / nextNumder;
            break;
        case '*': result = result * nextNumder;
    }
}

alert(result);
console.log("your result", result);