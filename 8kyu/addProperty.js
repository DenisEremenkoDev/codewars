// Ваша задача — добавить новое свойство usersAnswer к каждому объекту в массиве questions.
// Значение usersAnswer должно быть установлено в null.
// Решение должно работать для массива любой длины.


var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


questions.forEach(function (question) {
    question.usersAnswer = null;
});





// После добавления свойства результат должен быть следующим

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];

// Массив вопросов уже определен для вас и не совпадает с тем, что в примере.