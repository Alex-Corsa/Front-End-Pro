var sharp = '#',
    n = '\n#';

for( var i = 0; i < 10; i++){
    n = n + '#',
    sharp = sharp + n;
}

console.log(sharp)

// Бонус уровень

var unspecifiedSymbol = '';

for (var i = 0; i < 29; i++){
    if (i >= 0 && i < 28){
    unspecifiedSymbol += '#';
    } else {
    unspecifiedSymbol += '\n';
    }
}

for (var i = 0; i < 29; i++){
    if (i < 5 || i > 21 && i < 28){
    unspecifiedSymbol += '#';
    } else {
    unspecifiedSymbol += ' ';
    }
    if (i == 28) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i < 3 && i > 0 || i < 28 && i > 25) unspecifiedSymbol += '#';
    if (i > 2 && i < 6 || i > 8 && i < 25) unspecifiedSymbol += ' ';
    if (i > 5 && i < 9 || i < 26 && i > 23) unspecifiedSymbol += '*';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i > 5 && i < 8 || i > 26 && i < 29) unspecifiedSymbol += '#';
    if (i > 1 && i < 5 || i > 9 && i < 19 || i > 20 && i < 23 || i > 23 && i < 26) unspecifiedSymbol += ' ';
    if (i == 5 || i > 7 && i < 10 || i > 18 && i < 21 || i == 26) unspecifiedSymbol += '*';
    if (i == 23) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) unspecifiedSymbol += '#';
    if (i > 1 && i < 6 || i > 8 && i < 14 || i > 14 && i < 19 || i > 22 && i < 27) unspecifiedSymbol += ' ';
    if (i > 5 && i < 9 || i > 20 && i < 23 || i == 27) unspecifiedSymbol += '*';
    if (i == 14) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) unspecifiedSymbol += '#';
    if (i > 1 && i < 9 || i > 9 && i < 19 || i > 23 && i < 28) unspecifiedSymbol += ' ';
    if (i > 20 && i < 24 ) unspecifiedSymbol += '*';
    if (i == 9) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) unspecifiedSymbol += '#';
    if (i > 1 && i < 19 || i > 22 && i < 28) unspecifiedSymbol += ' ';
    if (i > 20 && i < 23 ) unspecifiedSymbol += '*';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i == 13 || i == 28) unspecifiedSymbol += '#';
    if (i > 1 && i < 5 || i > 5 && i < 13 || i > 14 && i < 28) unspecifiedSymbol += ' ';
    if (i == 14 ) unspecifiedSymbol += '*';
    if (i == 5) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i == 13 || i == 28) unspecifiedSymbol += '#';
    if (i > 2 && i < 13 || i > 15 && i < 23 || i > 23 && i < 28) unspecifiedSymbol += ' ';
    if (i == 2 || i > 13 && i < 16) unspecifiedSymbol += '*';
    if (i == 23) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i == 1 || i > 12 && i < 15 || i == 28) unspecifiedSymbol += '#';
    if (i > 4 && i < 13 || i > 15 && i < 20 || i > 20 && i < 25) unspecifiedSymbol += ' ';
    if (i > 1 && i < 5 || i > 13 && i < 16 || i > 25 && i < 28) unspecifiedSymbol += '*';
    if (i == 20) unspecifiedSymbol += 'O';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 30; i++){
    if (i > 0 && i < 3 || i > 11 && i < 15 || i > 25 && i < 29) unspecifiedSymbol += '#';
    if (i > 6 && i < 12 || i > 17 && i < 25) unspecifiedSymbol += ' ';
    if (i > 2 && i < 7 || i > 14 && i < 18 || i == 25) unspecifiedSymbol += '*';
    if (i == 29) unspecifiedSymbol += '\n';
}

for (var i = 0; i < 29; i++){
if (i >= 0 && i < 28){
    unspecifiedSymbol += '#';
    } else {
    unspecifiedSymbol += '\n';
    }
}

console.log(unspecifiedSymbol)