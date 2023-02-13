/*
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string, letter) {
    var answer = '';
    answer = [...my_string].map(x => x.replace(letter, "")).join("");  // arr.replace(n , "") : 배열의 n인자를 제거
    
    return answer;
}

console.log(solution("abcdef","f")); // abcde
console.log(solution("BCBdbe","B"));  // Cdbe


// 초 간단식


function solution2(my_string2, letter2) {
    return my_string2.replaceAll(letter2, "");  // arr.replaceAll(n, "") : 배열변환 필요 없이 문자열에서 문자 n 바로 제거
}

console.log(solution2("Maple Story", "S"));  // Maple tory
