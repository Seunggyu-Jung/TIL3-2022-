/*
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(sides) {
    let answer2 = 0;
    var answer = sides.sort(function(a,b){
        return a - b;
    });
    
    if (answer[2] < answer[1] + answer[0]){
        answer2 += 1;
    } else {
        answer2 += 2;
    }
    
    return answer2;
}

console.log(solution([199, 72, 222])) // 1

// 초 간단식
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;   // 삼항 연산자로 더 간단하게 표현가능
}