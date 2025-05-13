// Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.


function square(params) {
    // return Math.pow(params, 2)
    return params ** 2
}
console.log(square(3));

const num = [1, 2, 3, 4, 4, 5, 6, 7, 2, 1]

const unique = [...new Set(num)]; // [1, 2, 3]
console.log(unique);
