//Задание 1
document.write("Задание 1</br>");
let mass1 = [1, 2, 3, 4, 5];

for (let num1 of mass1) {
    document.write(`${num1}  `);
}


//Задание 2
document.write("</br></br>Задание 2</br>");
let mass2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let num2 of mass2) {
    if (num2 > -10 && num2 < -3) document.write(`${num2}  `);
}


//Задание 3
document.write("</br></br>Задание 3</br>");
let mass3 = [],
    mass3_ = [],
    startNum = 23,
    result = 0;

while (startNum <= 57) {
    mass3.push(startNum);
    startNum++;
}

document.write("Через While</br>");
document.write(mass3);


for (let l = 23; l <= 57; l++) {
    mass3_.push(l);
}

document.write("</br>Через for</br>");
document.write(mass3_);

for (let num3 of mass3) {
    result += num3;
}

document.write("</br>Сумма элементов массива</br>");
document.write(result);


//Задание 4
document.write("</br></br>Задание 4</br>");

let mass4 = ['10', '20', '30', '50', '235', '3000'],
    cifr4 = 2;                                         // указываем число, с которого должны начинаться выводимые числа

document.write(`Элементы массива начинающиеся с цифры ${cifr4}:</br>`);

for (let num4 of mass4) {
    if (num4[0] == cifr4) {
        document.write(`${num4}  `);
    }
}


//Задание 5
document.write("</br></br>Задание 5</br>");

let mass5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let num5 of mass5) {
    if (num5 == 'СБ' || num5 == 'ВС') {
        document.write(`<b>${num5}</b>  `);
    } else {
        document.write(`${num5}  `);
    }
}


//Задание 6
document.write("</br></br>Задание 6</br>");
let mass6 = ['ПН', 'ВТ', '20', '30', '50', -4, 2, -5, 9];

mass6.push('добавленный элемент');

document.write(`${mass6[mass6.length - 1]}  `);


//Задание 7
document.write("</br></br>Задание 7</br>");

let variable7,
    mass7 = [];

do {
    variable7 = prompt("Введите число(Задание 8). Для окончания ввода введите пустую строку.");

    if (!Number(variable7) && variable7.trim() && Number(variable7)!==0) {
        alert("Вы ввели не число!");
    } else if (variable7.trim()) {
        mass7.push(variable7);
    }
}
while (variable7.trim());

document.write(`Введенный массив чисел: ${mass7}</br>`);

mass7.sort(function (a, b) {
    return a - b;
});
document.write(`Отсортированный массив введенных чисел по-возрастанию: ${mass7}</br>`);


//Задание 8
document.write("</br></br>Задание 8</br>");

let mass8 = [12, false, 'Текст', 4, 2, -5, 0],
    index8 = 0;

mass8.reverse();

document.write(`Выводим элементы массива в обратном порядке через цикл while:</br>`);
while (index8 < mass8.length) {
    document.write(`${mass8[index8]} `);
    index8++
}

//Задание 9
document.write("</br></br>Задание 9</br>");

let mass9 = [5, 9, 21, , , 9, 78, , , , 6],
    num9 = 0;

for (let elem9 of mass9) {
    if (elem9 == undefined) num9++;
}

document.write(`Количество пустных элементов массива: ${num9}</br>`);


//Задание 10
document.write("</br></br>Задание 10</br>");

let mass10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    /*mass10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],*/   // второй массив добавен для возможности переключить его
    indexFirst = mass10.indexOf(0),
    indexEnd = mass10.lastIndexOf(0),
    indexStart = indexFirst + 1,
    result10 = 0;

if (indexFirst != -1 || indexEnd != -1) {
    for (; indexStart < indexEnd; indexStart++) {
        result10 += mass10[indexStart];
    }
}

document.write(`Дан массив: ${mass10}</br>`);
document.write(`Cуммa элементов массива между двумя нулями(первым и последним нулями в массиве): ${result10}</br>`);


//Задание 11
document.write("</br></br>Задание 11</br></br>");

let height = prompt("Введите высоту треугольника (целое число)(задание 11)"),
    mass11 = [],
    mass11Item = [],
    massIndex = [],
    index = 1;

while (!height.trim() || !Number.isInteger(Number(height)) || Number(height) < 1) {
    height = prompt("Ошибка! Введите высоту треугольника(задание 11)");
}

massIndex.push(Number(height));

for (let i = 0; i < height; i++) {
    for (let numIndex of massIndex) {
        mass11Item[numIndex] = "^";
    }
    massIndex.push(Number(height) - index);
    massIndex.push(Number(height) + index);
    mass11[i] = mass11Item;
    mass11Item = [];
    index++;
}

for (let num11 of mass11) {
    for (let num11Item of num11) {
        if (num11Item == undefined) {
            document.write(`<font color="white">^</font>`);
        } else {
            document.write(num11Item);
        }
    }
    document.write("</br>");
}