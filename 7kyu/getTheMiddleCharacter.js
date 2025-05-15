// Вам будет дана непустая строка.Ваша задача — вернуть средний символ(ы) строки.
// Если длина строки нечетная, верните средний символ. 
// Если длина строки четная, верните средние 2 символа.

// "test" -- > "es"
// "testing" -- > "t"
// "middle" -- > "dd"
// "A" -- > "A"

function getTheMiddleCharacter(str) {
    if (str.length % 2 !== 0) {
        return str.charAt(Math.floor(str.length / 2))
    } else {
        return str.substring((str.length / 2 - 1), str.length / 2 + 1)
    }
    // return str.length % 2 !== 0 ? str.charAt(Math.floor(str.length / 2)) : str.substring((str.length / 2 - 1), str.length / 2 + 1)
}


console.log(getTheMiddleCharacter("middle"));

