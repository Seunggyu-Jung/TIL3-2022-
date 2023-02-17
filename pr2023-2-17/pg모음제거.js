/*
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string){
let Mo = "aeiou";
let Str = my_string.split("");  // 객체로 변환
let answer = Str.filter((el) => (!Mo.includes(el))).join("");  // 문자열이 포함되지 않은 원소들을을 join
console.log(typeof Str);
return answer;
}

console.log(solution("nice to meet you"));  // nc t mt y


// 정규식 응용

function solution2(my_string){
    return my_string.replace(/[aeiou]/g , "");  // 전역 지정
}

console.log(solution2("bus")); // bs