// Дополните решение так, чтобы оно перевернуло переданную в него строку.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str) {
    return [...str].reverse().join("")
}
console.log(solution("world"));




function solution(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}

console.log(solution("world"));
