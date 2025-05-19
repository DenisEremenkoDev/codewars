
// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо ?». 
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк

// name + " plays banjo"
// name + " does not play banjo"

// Указанные имена всегда являются допустимыми строками.




const areYouPlayingBanjo = (name) => {
    return name[0] === "R" || name[0] === "r" ? name += " plays banjo" : name += " does not play banjo"
}

console.log(areYouPlayingBanjo("Rroma"));