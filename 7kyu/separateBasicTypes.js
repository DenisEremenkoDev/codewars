// Дано: последовательность значений разного типа(число, строка, логическое значение).
// Вы должны вернуть объект с отдельными свойствами для каждого из типов, представленных во входных данных.
// Каждое свойство должно содержать массив соответствующих значений.

// - сохранить порядок значений как во входном массиве
// -  если тип не указан во входных данных, соответствующее свойство не ожидается

// ['a', 1, 2, false, 'b']

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// function separateTypes(array) {
//     let archive = {
//         number: [],
//         string: [],
//         boolean: []
//     };


//     for (let i = 0; i < array.length; i++) {
//         result = array[i]
//         if (typeof result === "string") {
//             archive.string.push(result)
//         }

//         else if (!isNaN(result)) {
//             if (result === true || result === false) {
//                 archive.boolean.push(result)
//             } else {
//                 archive.number.push(result)
//             }
//         }
//     }
//     return archive
// }


function separateTypes(input) {
    let archive = {};


    for (let i = 0; i < input.length; i++) {

        if (typeof input[i] === "string") {
            if (!archive.string) {
                archive.string = []
            }
            archive.string.push(input[i]);
        }

        else if (typeof input[i] === 'number' && !isNaN(input[i])) {
            if (!archive.number) {
                archive.number = []
            }
            archive.number.push(input[i]);
        }

        else if (typeof input[i] === 'boolean') {
            if (!archive.boolean) {
                archive.boolean = []
            }
            archive.boolean.push(input[i]);
        }
    }
    return archive
}


console.log(separateTypes(['a', 1, 2, false, 'b']));
// console.log(archive);
