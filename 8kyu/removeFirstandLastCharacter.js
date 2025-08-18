// Ваша цель — написать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка.

// Важно: Ваша функция должна обрабатывать строки, состоящие из любых length ≥ 2символов.
// Для строк, состоящих ровно 2из символов, возвращайте пустую строку.

// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr'
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'


// Требования
// Входная строка всегда будет содержать не менее 2 символов.
// Для строк, содержащих ровно 2 символа, вернуть пустую строку.
// Для строк, состоящих из 3 или более символов, удалите первый и последний символ.
// Функция должна обрабатывать строки, содержащие буквы, цифры и специальные символы.


let string = "eloquent"

// function removeChar(str) {
//     //You got this!
//     let sliceStr = ""
//     if (str.length === 2) {
//         return sliceStr
//     } else {
//         return sliceStr = str.slice(1, -1)
//     }
// };

// console.log(removeChar(string));


let removeChar = (str) => {
    let sliceStr = ""
    return str.length === 2 ? sliceStr : sliceStr = str.slice(1, -1)
}

console.log(removeChar(string));