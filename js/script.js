/* Tasc № 1
Условие:
Дан HTML код. Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.
Решение:
*/

var task1 = function(){
    var zz = document.querySelectorAll('.zzz');

    zz.forEach(function (elem, i){
        elem.textContent = '' + i;
    })
}

/* Tasc № 2
Условие:
Дан HTML код. Поменяйте цвет текста на синий у элементов с текстом www.
Решение:
*/

var task2 = function(){
    var ww = document.querySelectorAll('body > *');
    console.log(ww)
    
    ww.forEach(function (elem){
        if (elem.textContent.includes('www')){
            elem.style.color = 'blue';
        };
    })
}

/* Tasc № 3
Условие:
Дан HTML код. Сгенерируйте новый список (ul > li) используя содержимое элементов с классом zzz.
Решение:
*/

var task3 = function(){
    var ul = document.createElement('ul'),
        zz = document.querySelectorAll('.zzz');
    
    document.querySelector('body').append(ul)

    zz.forEach(function (elem){
        var li = document.createElement('li');
        ul.append(li);
        li.innerText = elem.innerText;
    })
}