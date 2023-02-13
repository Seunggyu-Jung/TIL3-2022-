/*
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(cipher, code){
    let answer ='';
    for (var i = code -1; i < cipher.length; i += code){
        answer += cipher[i];
    }
    return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // attack