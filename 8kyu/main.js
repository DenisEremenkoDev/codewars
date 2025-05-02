

function multiply(number) {

    if (number === 0) {
        return 0;
    } else {
        let digitCount = Math.abs(number).toString().length; // определение кол-во цифр через строку

        let power = Math.pow(5, digitCount) // возведение в степень

        return result = number * power;
    }

}

console.log(multiply(10));
console.log(multiply(3));
console.log(multiply(-2));
console.log(multiply(0));
console.log(multiply(123));

// Джеку очень нравится его число пять: трюк здесь в том, что вам нужно умножить каждое число на 5,
// возведенное в степень количества цифр в каждом числе, например

// Math.pow(5, 2); // 49


