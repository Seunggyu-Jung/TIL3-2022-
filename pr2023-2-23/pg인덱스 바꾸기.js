/*
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, num1, num2) {
    var result = [...my_string]
    result.splice(num1, 1, my_string[num2]);    // array.splice(start , d, item) : start에 있는 인덱스부터 d개를 item으로 바꿈
    result.splice(num2, 1, my_string[num1]);
    return result.join("");
}

console.log(solution("hello", 1, 5)) // hlloe