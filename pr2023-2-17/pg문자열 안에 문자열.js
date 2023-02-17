/*
문자열 str1, str2가 매개변수로 주어집니다. 
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/

// includes() 메서드는 배열 및 문자열 메서드

function solution(str1, str2) {
    
    return str1.includes(str2) ? 1:2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));