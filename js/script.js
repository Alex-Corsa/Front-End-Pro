// Условие

var cruisers = ['1-b', '1-c', '1-d', '1-e', '1-f', '1-g', '2-c', '2-e', '2-g', '3-d', '3-f', '3-g', '4-f', '4-g', '4-h', '4-i', '5-b', '5-c', '5-d', '5-e', '5-g', '5-j', '6-b', '6-c', '6-d', '6-e', '6-g', '6-j', '7-f', '7-g', '7-h', '7-i', '8-d', '8-f', '8-g', '9-c', '9-e', '9-g', '10-b', '10-c', '10-d', '10-e', '10-f', '10-g'];
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// Поле битвы

function start(){
    var div = document.createElement('div');
    var body = document.querySelector('body');

    div.className = 'wrap';
    body.append(div)

    for (var i = 0; i < field.length; i++) {
        for (var m = 0; m < field.length; m++) {
            createBtn('' + (m + 1) + '-' + field[i]);
        }
    }
}

// Ячейки

function createBtn(text){
    var btn = document.createElement('button');
    btn.className = 'button' + ' click';
    btn.innerHTML = text;
    var wrap = document.querySelector('.wrap');
    wrap.append(btn)
}

// Действие

document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.click');
    if (check) {
        if (cruisers.includes(elem.textContent)){
            elem.classList.add('hit')
            alert('Крейсер "Москва" совершил отрицательное всплытие!')
        } else {
            elem.classList.add('past')
        }
        elem.classList.remove('click')
    }
})

start()
