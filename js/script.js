/* Tasc №
Условие:
Напишите функцию toSum для вычисления суммы массива целых чисел.
Решение:
*/

// var array = [1, 2, 3, 4, 5],
//     l = array.length,
//     result = 0;

// function toSum(arr, arrL){
//     arrL = arrL - 1;
//     if (arrL >= 0) {
//         result = arr[arrL] + toSum(arr, arrL)
//     }
//     return result
// }

// toSum(array, l)

// console.log(result)

/* Tasc №
Условие:
Ваша задача - сделать функцию, которая возвращает сумму последовательности целых чисел.
Последовательность определяется тремя неотрицательными значениями: начало, конец, шаг.
Если начальное значение больше конца, функция должна вернуть 0
Решение:
*/

var calc = 0;

function retSum(start, finish, step){
    if (start < 0 || finish < 0 || step <= 0){
        return 0
    }

    calc += start;

    if ((start + step) <= finish) {
        start = (start + step) + retSum(start+step, finish, step)
    }
}

retSum(1, 8, 2)

console.log(calc)
