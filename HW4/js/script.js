"use strict"

//  1 задача
let str = prompt('Введите любое длинное число:'),
    result = 0
for (var i = 0; i <str.length; i++) {
    result += +Number(str[i])
}
alert('Сумма цифр числоа ' + str + ' равна ' + result)

// 2 задача
let strDouble = prompt('Введите сюда то, что хотите:'),
    resultDouble,
    symbol = prompt('Введите символ который должен удвоиться:')
if (strDouble.includes(symbol)) {
    resultDouble = strDouble.split(symbol).join(symbol.repeat(2))
    console.log(resultDouble)
} else console.log(symbol + ' отсутсвует в данной строчке')

// 3 задача
let password
password = prompt('Введите пароль')
let regExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d)(?=.*\W).{9,}/
let validation = (regExp.test(password))
console.log(validation)
