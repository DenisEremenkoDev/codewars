// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своих местах.
// Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).


// Подсказка: не забудьте проверить наличие плохих значений, таких как  null/undefined


const sheep = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]  //17



const countSheeps = (sheep) => {
    return sheep.filter(Boolean).length
}


console.log(countSheeps(sheep));

