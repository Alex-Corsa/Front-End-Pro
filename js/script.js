// Условие

var cruisers = ['1-b', '1-c', '1-d', '1-e', '1-f', '1-g', '2-c', '2-e', '3-d', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ];
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
