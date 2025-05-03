// Я новичок в программировании и теперь хочу получить сумму двух массивов... 
// На самом деле сумму всех их элементов. Буду признателен за помощь.
//  P.S. Каждый массив включает только целые числа. Вывод тоже является числом.





// function arrayPlusArray(arr1, arr2) {

//     let sumArray1 = 0;
//     let sumArray2 = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         sumArray1 += arr1[i]
//     }
//     // console.log(sumArray1);

//     for (let i = 0; i < arr1.length; i++) {
//         sumArray2 += arr2[i]
//     }
//     // console.log(sumArray2);

//     return sumArray1 + sumArray2

// }



// //21;
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));




function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));

