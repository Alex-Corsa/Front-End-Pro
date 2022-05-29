/* Tasc №
Условие:
Ваша задача сделать игру крестики нолики.
Игроки клацают по очереди
Где уже поля отмечены клацать нельзя
Выводить победителя (игрок 1 или игрок 2)
Кнопка перезапуска
Очищать поля
Поле генерируем через js
Решение:
*/

// Победные комбинации:

var i = 1,
    circle = [],
    cros = [],
    user = '',
    cAns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ],
    noMove = false;

function createBtn(bTag){
    var btn = document.createElement('div');
    btn.className = 'button click';
    btn.setAttribute('data-id', bTag)
    var wrap = document.querySelector('.wrap');
    wrap.append(btn)
}


function start(){
    var div = document.createElement('div');
    var body = document.querySelector('body');

    div.className = 'wrap';
    body.prepend(div)

    for (var i = 1; i < 10; i++) {
        createBtn(i);
    }
}

var relod = function(){
    var wrap = document.querySelector('.wrap');
    i = 0;
    circle = []
    cros = []
    noMove = false
    wrap.remove('button')
    start()
}

var winCheck = function(mas){
    for (var g = 0; g < cAns.length; g++){
        var elem = cAns[g];
        var count = 0;

        for (var l = 0; l < elem.length; l++){
            if (mas.includes(elem[l])){
                count++
                if (count == 3){
                    alert('' + user + ' has won')
                    noMove = true
                    stopClick()
                    break
                }
            }
        }
    }
}

var stopClick = function(){
    var btns = document.querySelectorAll('.button');
    console.log(btns)

    btns.forEach(function (elem){
        elem.classList.remove('click')
    })
}

document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.click');

    if (check) {
        if (i == 9) {
            alert('Ничья')
            noMove = true
        }
        if (i%2 == 0){
            cros.push(parseInt(elem.dataset.id))
            elem.classList.add('muerto')
            winCheck(cros)
            user = 'Нолики';
            if (!noMove){
                alert('Очередь: ' + user)
            }
        } else {
            circle.push(parseInt(elem.dataset.id))
            elem.classList.add('zero')
            winCheck(circle)
            user = 'Крестики';
            if (!noMove){
                alert('Очередь: ' + user)
            }
        }
        elem.classList.remove('click')
        i++
    }
    var check2 = elem.matches('.restart')
    if (check2) {
        relod()
    }
})

alert('Очередь Нолики')

start()