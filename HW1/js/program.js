"use strict"
/*
// 1 задача
var square = 10
var width = 25
var height = 15
var gardenBed = width * height
// console.log(gardenBed)
var free = (square * 100) % gardenBed
console.log('Осталось ' + free + ' метров квадратных')

// 2 задача
var circle1 = 15
var circle2 = 600
var freeArea = circle1 * 100 - circle2
console.log('Площадь овального кольца ' + freeArea + ' квадратных сантиметров')

// 3 задача 
var number1 = prompt('Введите первое число')
console.log(number1)
var number2 = prompt('Введите второе число')
console.log(number2)
var number4
var number3 = prompt('Введите третье число')
console.log(number3)  
var res = Math.min(number1, number2, number3)
console.log('Минимальное число ' + res)
*/
// 4 задача
var n = prompt('Введите первое число')
console.log(n)
var m = prompt('Введите второе число')
console.log(m)
var minus1 = Math.abs(10 - m),
    minus2 = Math.abs(10 - n)
if (minus1 > minus2) {
    console.log('Ближайшее к 10 - ' + n)
} else if (minus2 > minus1) {
    console.log('Ближайшее к 10 - ' + m)
} else {
    console.log('Числа равноудалены от 10')
}   


// 5 задача
let X = [0, 0, 0],
    Y = [5, 0, 0],
    Z = [0, 0, 7],
    XY, YZ, ZX
    XY = Math.pow(Y[0] - X[0], 2) + Math.pow(Y[1] - X[1], 2) + Math.pow(Y[2] - X[2], 2)
    YZ = Math.pow(Z[0] - Y[0], 2) + Math.pow(Z[1] - Y[1], 2) + Math.pow(Z[2] - Y[2], 2)
    ZX = Math.pow(X[0] - Z[0], 2) + Math.pow(X[1] - Z[1], 2) + Math.pow(X[2] - Z[2], 2)

if (XY + YZ === ZX) {
    console.log('Треуголник прямоугольный')

} else if (XY + ZX === YZ) {
    console.log('Треуголник прямоугольный')

} else if (YZ + ZX === XY) {
    console.log('Треуголник прямоугольный')
}
else {
    console.log('Треугольник непрямоугольный')
}

