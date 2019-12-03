"use strict"

// 1 задача
function comparison(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } else {  
        for (let i = 0; i <= arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                return true }
        } 
        return false 
    }
}

console.log(comparison([1, 2], [1, 2, 3, 4]))

// 2 задача
function range(first, last, step = 1) {
    let arr = []
    for (let i =first; last >= i; i = i + step) {
        arr.push(i)
    }
    return(arr)
}
console.log(range(-8, 10, 3))

// 3 задача

let objectStudent = {
    name: 'Alina',
    surname: 'Davydovskaya',
    age: 22,
    hobby: ['football', 'study', 'cats'],
    university: 'ITMO'
}

function getData(obj) {
    for (let info in obj) {
        console.log(info + ' ' + obj[info])
    }
} 

getData(objectStudent)
