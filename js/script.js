/* Tasc №-3
Условие:
Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, 
которая принимает введенную строку и возвращает булевое значение true, 
если введенная строка совпадает с паролем и false – если не совпадает.
Решение:
*/

function makePassword(){
    var password = '42';
    return function checkPassword(ans){
        return (ans == password)
    }
}

var pass1 = prompt('Password?'),
    pro = makePassword();

pro(pass1);
console.log(pro(pass1))

/* Tasc №-2
Условие:
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись,
пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией
Решение:
*/

function randomGacha(){
    var store = [];

    return function randNum(){
        var rand = Math.floor(Math.random()*100);
        if (!store.includes(rand)){
            store.push(rand);
            console.log(store)
        }
    }
}

var test = randomGacha();

for (var i = 0; i < 100; i++){
    test();    
}