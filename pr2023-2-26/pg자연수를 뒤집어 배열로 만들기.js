/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
*/

function solution(n) {
    let answer = []
    let Num = [...n +""];
    for (let i = Num.length - 1; i >= 0; i-- ){
        answer.push(parseInt(Num[i]))
    }
    return answer;
}

console.log(solution(547832)) // [ 2, 3, 8, 7, 4, 5 ]