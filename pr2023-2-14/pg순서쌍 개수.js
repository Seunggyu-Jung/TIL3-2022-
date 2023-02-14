/*
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    var answer = 0;
    let Soon = [];
    for (let i = 1; i <= n; i++ ){
        if (n % i === 0){
            Soon.push(i, n/i);    
        }
    }
    
    answer += Soon.length / 2;
    return answer;
}

console.log(solution(100)) // 9