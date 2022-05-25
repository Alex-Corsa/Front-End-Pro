/* Tasc №-1
Условие:
Мы должны ввести время в формате (10:20, чч:мм). 
На странице отображаются часы с текущим временем. 
При достижении указанного времени выводим сообщение «Звонок»
Решение:
*/

var tSet = prompt('Введіть час у форматі гг:хх');
var time = tSet.split(':');

var alarm = setInterval(function (){
    var trash = new Date(),
    tSet2 = trash.toLocaleTimeString(),
    time2 = tSet2.split(':');

    document.getElementById('alarm').innerHTML = tSet2;

    if (time[0] == time2[0] && time[1] == time2[1]){
        alert('Час прокидатися')
        return clearInterval(alarm)
    }
}, 1000);