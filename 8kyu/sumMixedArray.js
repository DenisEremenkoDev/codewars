// Дан массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.



function sumMix(x) {
    let sum = 0;
    for (let item of x) {
        const num = Number(item)
        sum += num
    }
    return sum
}
