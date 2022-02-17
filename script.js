//Реализация методов перебора массивов в виде функций
//1. .filter
const numbers = [4, 5, 6]

const func = (array, callback) => {
    const newArr = []
    for(i = 0; i < array.length; i++){
        if(callback(array[i]))
        newArr.push(array[i])
    }
    return newArr
}

const filt = func(numbers, (item) => item  > 4)
console.log(filt)
//2. .map

const map = (array, callback) => {
    const newArr = []
    for(i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr
}

const mp = map(numbers, item => item * 2)
console.log(mp)
//3. .find

const find = (array, callback) => {
    for(i =0; i < array.length; i++){
        if (callback(array[i])) {
        return array[i]}
    }
}

const fnd = find(numbers, item => item === 5)
console.log(fnd)
//4. .reduce

const reduce = (array, reducer, initValue) => {
    let accum = (!initValue) ? array.shift() : initValue
    array.forEach((item) => accum = reducer(accum, item))
    return accum
}

const rdc = reduce(numbers, (accum, item) => accum += item)
console.log(rdc)

