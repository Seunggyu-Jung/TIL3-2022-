/*
정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    var answer = Number.isInteger(Math.sqrt(n)) ? 1 :2;  // Number.isInteger() : 정수인지 판별 , Math.sqrt() : 제곱근을 구하는 메서드
    return answer;
}

console.log(solution(976)) // 2
console.log(solution(144)) // 1