// Нам нужна функция, которая может преобразовать строку в число.Какие способы достижения этого вы знаете ?
// Примечание : Не волнуйтесь, все входные данные будут строками, и каждая строка является совершенно допустимым представлением целого числа.
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


const stringToNumber = (str) => {
    return parseFloat(str)
}