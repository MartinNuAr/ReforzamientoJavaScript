const array1 = [1, 2, 3]

array1.push(4)

const array2 = [ ...array1 ]

array2.push(5)

const array3 = array2.map(item => {
    return item * 2
})

console.log(array1)
console.log(array2)
console.log(array3)