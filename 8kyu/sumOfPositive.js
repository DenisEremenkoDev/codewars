// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// let num = [1, -4, 7, 12]


let sum = 0

function positiveSum(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
}
positiveSum([1, 2, 3, 4, 5])
console.log(sum);

