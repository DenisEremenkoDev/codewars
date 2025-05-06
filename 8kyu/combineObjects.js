

// Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
// Все свойства входных объектов будут иметь только числовые значения.Объекты объединяются вместе, так что значения соответствующих ключей суммируются.

// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.


function combine(...objects) {
    // Your code here
    let result = {};
    for (const obj of objects) {
        for (const key in obj) {
            if (key in result) {
                result[key] += obj[key]
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result;
}

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
const result = combine(obj1, obj2);
console.log(result); // { a: 10, b: 50, c: 40 }





// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }