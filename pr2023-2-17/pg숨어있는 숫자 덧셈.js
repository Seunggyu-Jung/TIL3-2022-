/*
문자열 my_string이 매개변수로 주어집니다.
 my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    let answer2 = 0;
    var answer = my_string.split("");
    for (let i = 0 ; i <= answer.length -1; i++){
        if (answer[i] >= 0){
            answer2 += parseInt(answer[i]);
        }
    }
    
    return answer2;
}

console.log(solution("aAb1B2cC34oOp")); // 10