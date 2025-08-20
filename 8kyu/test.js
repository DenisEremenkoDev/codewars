// // Фрукт: яблоко
// // Фрукт: банан
// // Фрукт: апельсин
// // Фрукт: киви

// const fruits = ['яблоко', 'банан', 'апельсин', 'киви'];

// fruits.forEach(el => console.log(`Фрукт: ${el}`));



// Условие:
// Дан массив numbers.Используя forEach, вычисли сумму всех чисел и сохрани её в переменную sum.

// console.log(sum); // 50

// const numbers = [5, 10, 15, 20];
// let sum = 0;

// numbers.forEach(element => sum += element)
// console.log(sum);

// ------------------------------------------

// Дан массив values. Используя forEach, замени все отрицательные числа на 0.
// Исходный массив должен измениться.

// Ожидаемый результат:
// console.log(values); // [10, 0, 3, 0, 8, 0]

const values = [10, -5, 3, -2, 8, -1];

values.forEach((value, index, array) => {
    if (value < 0) {
        array[index] = 0
    }
})

console.log(values);
