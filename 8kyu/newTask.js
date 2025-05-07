// Напиши функцию, которая принимает объект и возвращает массив его значений.
// Пример:



function getValues(Obj) {
    let num = []
    for (const key in Obj) {
        // Проверяет наличие ключа в объекте
        num.push(Obj[key])

    }
    return num
}


// [1, 2]
console.log(getValues({ a: 1, b: 2 }));
