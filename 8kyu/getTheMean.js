//  Конец учебного года, роковой момент вашего школьного отчета.Средние баллы должны быть рассчитаны.
//  Все студенты приходят к вам и умоляют вас рассчитать их средний балл.
//  Легко! Вам просто нужно написать скрипт.
//  Верните среднее значение заданного массива, округленное до ближайшего целого числа.
//  Массив никогда не будет пустым.



// function getAverage(marks) {
//     //TODO : вычислить округленное вниз среднее значение массива оценок
//     //1. подсчёт цифр
//     //2. сложить все между собой
//     //3. разделить сумму на кол-во цифр
//     //4. округлить до ближайшего целого

//     const quantityNum = marks.length // кол-во цифр
//     const sumNumbers = marks.reduce((a, b) => a + b) // сумма массива
//     const divisionNumbers = sumNumbers / quantityNum // деление суммы на кол-во
//     const rounding = Math.floor(divisionNumbers)
//     return rounding

// }



// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));


const getAverage = marks => {
    const sum = marks.reduce((a, b) => a + b);
    const average = sum / marks.length
    return Math.floor(average)
}

let num1 = getAverage([1, 5, 87, 45, 8, 8])
console.log(num1);