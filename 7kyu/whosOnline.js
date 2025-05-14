// У вас есть приложение для группового чата, но кто сейчас онлайн!?
// Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!
// Если кто-то находится в сети, но его последняя активность была более 10 минут назад, он считается отсутствующим.

// Входные данные имеют следующую структуру:
const users = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

// Соответствующий вывод должен выглядеть следующим образом
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

// Например, если ни один пользователь не находится в сети, вывод должен выглядеть следующим образом:
// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }

// имя пользователя всегда будет строкой, статус всегда будет либо «в сети», либо «не в сети»
// (перечисление UserStatus в C#), а lastActivity всегда будет number >= 0.

// Наконец, если у вас нет друзей в вашем чат-приложении, входными данными будет пустой массив [].
//  В этом случае вы должны вернуть пустой объект {} (пустой словарь в C#).




function whosOnline(array) {

    if (array.length === 0) {
        return {}
    } else {

        const exam = array.reduce((acc, array) => {
            if (array.status === "online" && array.lastActivity <= 10) {   //online
                acc.online.push(array.username)
            } else if (array.status === "offline") {
                acc.offline.push(array.username)
            } else if (array.status === "online" && array.lastActivity > 10) {
                acc.away.push(array.username)
            }
            return acc
        }, { online: [], offline: [], away: [] });
        for (const key in exam) {
            if (exam[key].length === 0) {
                delete exam[key];
            }
        }
        return exam
    }
};
const result = whosOnline(users)
console.log(result);



// const examOnline = users.reduce((acc, user) => {
//     if (user?.status === "online" && user?.lastActivity <= 10) {   //online
//         acc.online.push(user.username)
//     }
//     return acc

// }, { online: [] })

// console.log(examOnline);

// const examOffline = users.reduce((acc, user) => {
//     if (user?.status === "offline") {                                 //offline
//         acc.offline.push(user.username)
//     }
//     return acc

// }, { offline: [] })

// console.log(examOffline);


// const examAway = users.reduce((acc, user) => {
//     if (user?.status === "online" && user?.lastActivity > 10) {        //away
//         acc.away.push(user.username)
//     }
//     return acc

// }, { away: [] })

// console.log(examAway);



