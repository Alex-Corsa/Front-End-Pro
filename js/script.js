/* Tasc № 1
Условие:
Дан массив пользователей [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40} ]. 
Отсортируйте его по возрасту.
Решение:
*/

// var arr =  [{name: 'Vasya', age: 42}, {name: 'Alex', age: 31}, {name: 'Sasha', age: 18}, {name: 'Dima', age: 4}, {name: 'July', age: 30}];

// arr.sort(function (a, b){
//     return a.age - b.age;
// })

// console.log(arr)

/* Tasc № 2
Условие:
Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
Решение:
*/

// var arr = ['', true, false, 42, 127, -42, NaN, null, undefined];
// function filterFalse(aray){
//     aray = aray.filter(function(item){
//         return item > 0 || item < -0 || (typeof item) == 'string' && item != '';
//     })
//     console.log(aray)
// }

// filterFalse(arr)

/* Tasc № 3
Условие:
Напишите функцию find(arr, value), которая вернет массив всех индексом значения. (Не использовать метод find)
Решение:
*/

// var arr = [false, 10, 100, NaN, 10, true, 10],
//     test = [];

// function find(elem, value){
//     for (var i = 0; i < elem.length; i++){
//         var item = arr[i];
//         if (item === value){
//             test.push(i)
//         }
//     }
//     console.log(test)
// }

// find(arr, 10)

/* Tasc № 4
Условие:
Создать функцию createMatrix(row, col), принимающую количество строк и количество столбцов матрицы и возвращающее матрицу (массив массивов), заполненную случайными числами в диапазоне от 0 до 100 (random).
Решение:
*/

// var matrix = [],
//     result = [];

// function createMatrix(row, col){
//     var sum = row * col,
//         random = Math.floor(Math.random()*100),
//         space = col - 1;
    
//     for (var i = 0; i < sum; i++){
//         var random = Math.floor(Math.random()*100);
    
//         if (i%space === 0 && i !== 0) {
//             matrix.push([random]);
//             matrix[i].push('\n');
//             space = space + col;
//         } else {
//             matrix.push([random]);
//         }

//         matrix[i] = matrix[i].join('')
//     }

//     result.push(' ');

//     result = result + matrix.join(' ');

//     console.log(result)
// }

// createMatrix(13,8)

/* Tasc № 5 (Бонус уровень)
Условие:
Реализуйте функцию flatten(), которая в случае, если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины).
Пример: flatten([1, [2], [3, [4]]]) вернёт [1, 2, 3, 4]
Решение:
*/

// function flatten(arr){
//     var elem_1 = arr.join();
//     var elem_2 = [elem_1.split()];
//     console.log(elem_2);
// }

// flatten([1, [2], [3, [4]]]);