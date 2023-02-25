/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
*/

function solution(n)
{
    let answer = 0;
    let Num = [...n + ""];
    for (let i = 0; i <= Num.length - 1; i++){
        answer += parseInt(Num[i]);
    }
    return answer;
}

console.log(solution(589)) // 22
console.log(solution(779)) // 23