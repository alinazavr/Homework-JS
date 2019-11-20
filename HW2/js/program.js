"use strict"

// 1 задача
let month = parseInt(prompt('Введите порядковый номер месяца'))
switch (month) {
    case 12:
    case 1:
    case 2:
        alert('Это зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Это Весна');
        break;  
    case 6:
    case 7:
    case 8:
        alert('Это лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Это осень');
        break;                          
}

// 2 задача
let unit = parseInt(prompt(`Введите цифру единицы измерения:
    1 - дм
    2 - км
    3 - м
    4 - мм
    5 - см`)),
    long = parseInt(prompt(`Введите длину отрезка:`))
switch (unit) {
    case 1:
        alert(`${long} дм  = ${long / 10} м`);
        break;
    case 2:
        alert(`${long} км  = ${long * 1000} м`);
        break;
    case 3:
        alert(`${long} м  = ${long} м`);
        break;
    case 4:
        alert(`${long} мм  = ${long / 1000} м`);
        break;
    case 5:
        alert(`${long} см  = ${long / 100} м`);
        break;  
    default:
        alert('Введите цифру от 1 до 5');
}             

// 3 задача
let number = prompt('Введите любое число от -999 до 999:')
if (number >= -999 && number <= -100) {
    alert(number + ' - трехзначное отрицательное')
} else if (number >= -99 && number <= -10) {
    alert(number + ' - двухзначное отрицательное')
} else if (number >= -9 && number <= -1) {
    alert(number + ' - однозначное отрицательное')
} else if (number == 0) {
    alert('ноль')
} else if (number <= 999 && number >= 100) {
    alert(number + ' - трехзначное положительное')
} else if (number <= 99 && number >= 10) {
    alert(number + ' - двухзначное положительное')
} else if (number <= 9 && number >= 1) {
    alert(number + ' - однозначное положительное')
} else {
    alert('Введите число из указанного интервала')
}

// 4 задача
for (let i = 1; i <= 100; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        console.log(i + ' ThreeFive')
    } else if (i % 3 === 0) {
        console.log(i + ' Three')
    } else if (i % 5 === 0) {
        console.log(i + ' Five')
    } else {
        console.log(i)
    }
}

// 5 задача
let year = prompt('Введите интересующий Вас год:')
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    alert('Год високосный')
} else {
    alert('Год невисокосный')
}

// 6 задача
let plate = prompt('Сколько тарелок вам надо помыть?'),
    fairy = prompt('Сколько у вас есть fairy?')
if (fairy < 0.5) {
    alert('Извините, но у вас нет средства для мытья посуды')
} else if (plate < 1) {
    alert('У вас нет грязной посуды!')
}
    while (plate >= 1 && fairy >= 0.5) {
        fairy = fairy - 0.5;
        plate = plate - 1
        alert('Осталось ' + plate + ' грязных тарелок и ' + fairy + ' моющего средства')
    }   
        if (plate == 0 && fairy >= 0.5) {
            alert('У вас закончилась грязная посуда и осталось ' + fairy + ' моющего средства')
        } else if (fairy == 0 && plate >= 1) {
            alert('У вас закончилось моющее средство и осталось ' + plate + ' грязных тарелок')
        } else {
            alert('Тарелки и моющее средство закончилось')
        } 