/*
사냥감의 체력 hp가 매개변수로 주어질 때, 
사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
*/

function solution(hp) {
    var answer = 0;
    let hp2 = Math.floor(hp % 5);
    let hp3 = 0;
    if (hp % 5 != 0){
        answer += Math.floor(hp / 5);
    } else {
        answer += hp / 5;
    }
    if (hp2 % 3 != 0){
        answer += Math.floor(hp2 / 3);
    } else {
        answer += hp2 / 3;
    } 
    answer += hp2 % 3
    return answer;
} 

console.log(solution(999)) // 201
console.log(solution(777))  // 157 