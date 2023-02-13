/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, n) {
    let answer = '';
    for (var i = 0 ; i <= my_string.length - 1; i++){
        answer += my_string[i].repeat(n);  // arr[i].repeat(n) : 배열의 인자를 n번 반복
    }
    return answer;
}

console.log(solution('hello', 3)); // hhheeellllllooo

// 초 간단식 : 전개구문, map메서드, join메서드

function solution2(my_string2, n2){
    let answer2 = [...my_string2].map(x => x.repeat(n2)).join("");  // 전개구문으로 배열로 만들고, map 메서드로 변화르 주며, 이를 join 메서드로 다시 결합시킴
    return answer2;
}

console.log(solution2('hey', 3));