/* 
Задача 1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая 
найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
*/

function task1() {
    var string = "ahb acb aeb aeeb adcb axeb";
    var regex = /a.b/g;
    console.log(string.match(regex));
}
task1();

/*
Задача 2. Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, 
которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.
*/

function task2() {
    var string = "*+ *q+ *qq+ *qqq+ *qqq qqq+'";
    var regex = /\*q+\+/g;
    console.log(string.match(regex));
}
task2()

/*
Задача 3. Выбрать существующие даты между 1000 и 2012 годом. Секунды могут быть 
опущены. Облегчаем задачу: в каждом месяце 30 дней.
Результат:
2012/09/18 12:10 — true
2013/09/09 09:09 — false (после 2012)
*/

var someDate = prompt('', 'от 1000/01/01 00:00 - до 2012/12/30 23:59')
function task3() {
    var string = someDate;
    var regex = /(100\d|10[1-9]\d|1[1-9][0-9]\d|200\d|201[1-2])\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|30)\s([0-1]\d|2[0-4])\:[0-5]\d/g;
        alert(regex.test(string))
}
task3();


/*Задача 4. Убрать повторяющиеся пробелы и знаки табуляции, оставить по одному 
пробелу между словами и по два между предложениями.
Extra   spaces => Extra spaces
Sentence.   Sentence. => Sentence.  Sentence.
*/

function task4() {
    var string = 'Extra   spaces  Sentence.   Sentence.';
    var regex = /\s+/g;
    var regex2 = /\. \s/g;

console.log(string.replace(regex, ' ').replace(regex2, '.  '))
}
task4();