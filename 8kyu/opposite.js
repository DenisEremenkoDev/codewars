// Очень просто: дано число (целое / десятичное / и то, и другое в зависимости от языка),
//  найти его противоположность (аддитивное обратное).

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     //your code here
//     if (number < 0) {
//         return number += (-number * 2)
//     } else {
//         return number -= (number * 2)
//     }
// }

// console.log(opposite(-2.41));

// let opposite = (number) => number < 0 ? (number += (-number * 2)) : (number -= (number * 2))
// console.log(opposite(-2.41));

function opposite(number) {
    return (-number);
}