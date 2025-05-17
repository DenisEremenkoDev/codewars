// Какой - то очень забавный веб - разработчик выдал вам последовательность чисел из своего ответа API в виде последовательности строк
// Вам необходимо привести весь массив к правильному типу.
// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит последовательность чисел

// т.е.: ["1", "2", "3"] до[1, 2, 3] Обратите внимание, что вы также можете получать числа с плавающей точкой.

// function toNumberArray(stringarray) {

//     return result


// }


const toNumberArray = (stringarray) => {
    let result = [];
    let num;
    for (let i = 0; i < stringarray.length; i++) {
        num = Number.parseFloat(stringarray[i])
        result.push(num)
    }
    return result
}

console.log(toNumberArray(["1.1", "2", "3.4"]));