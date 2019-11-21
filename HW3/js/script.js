"use strict"

// 1 задача
let arrA = [12, 4, 3, 10, 1, 20],
    arrB = [-3, -7, -100, -33],
    arrC = arrA.concat(arrB)
console.log(arrC)    

// 3 задача
let arr = [12, 4, 3, 10, 1, 20],
    max = arr[0], 
    min = arr[0],
    maxIndex,
    minIndex
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i; 
    }
        if (arr[i] < min) {
        min = arr[i];
        minIndex = i; 
    }
}
console.log(min)
console.log(max)
delete arr[minIndex]
delete arr[maxIndex]
console.log(arr)

// 4 задача
let ticket = [0, 0, 0, 0, 0, 1],
    count = 0
for (ticket[5];  ticket[0] <= 9; ticket[5]++){
    if (ticket[5] == 10) {
        ticket[5] = 0;
        ticket[4]++
    }
    if (ticket[4] == 10) {
        ticket[4] = 0;
        ticket[5] = 0;
        ticket[3]++
    }
    if (ticket[3] == 10) {
        ticket[5] = 0;
        ticket[4] = 0;
        ticket[3] = 0;
        ticket[2]++
    }
    if (ticket[2] == 10) {
        ticket[5] = 0;
        ticket[4] = 0;
        ticket[3] = 0;
        ticket[2] = 0;
        ticket[1]++
    }
    if (ticket[1] == 10) {
        ticket[5] = 0;
        ticket[4] = 0;
        ticket[3] = 0;
        ticket[2] = 0;
        ticket[1] = 0;
        ticket[0]++
    }
    if (ticket[5] + ticket[4] + ticket[3] == ticket[2] + ticket[1] + ticket[0]) {
        count++
    }
}
console.log(count)