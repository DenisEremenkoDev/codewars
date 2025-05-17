// Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда отвечает: «x лет», где x — случайное число от 0 до 9

// Напишите программу, которая возвращает возраст девочки(0 - 9) в виде целого числа

// Предположим, что тестовая входная строка всегда является допустимой строкой.
//     Например, тестовая входная строка может быть "1 year old" или "5 years old".
// Первый символ в строке всегда является числом.

function getAge(inputString) {
    // return the girl's correct age as an integer. Happy coding :) 
    // return `${inputString} years old`
    return parseFloat(inputString)
}


console.log(getAge(4));
