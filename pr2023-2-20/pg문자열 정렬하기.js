/*
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/

function solution(my_string) {
    var answer = [...my_string].filter((el) => (el) >= 0).map(x=> +x).sort(function(a,b){ return a - b;});
    return answer;
}

console.log(solution("f4wdf5s2s8fe4s")) // [ 2, 4, 4, 5, 8 ]