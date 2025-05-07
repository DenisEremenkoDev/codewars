// Возьмите массив и удалите каждый второй элемент из массива. 
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента





// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]--> ["Keep", "Keep", "Keep", ...]



function removeEveryOther(arr) {
    //your code here
    return arr.filter((element, index) => index % 2 === 0)
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));