/*
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/

function solution(n) {
    let Num = n + "";  // 숫자열을 문자열로 변환하는 방법 + ""
    let s = 0;
    for (let a of Num){
        s += parseInt(a);
    }
   
    return s;
}

console.log(solution(930211)) // 16
