/*
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
*/

function solution(angle) {
    var answer;
    
    if (angle > 0 && angle < 90){
        answer = 1;
    } else if (angle == 90){
        answer = 2;
    } else if (angle > 90 && angle < 180){
        answer = 3;
    } else {
        answer = 4;
    }
    
    return answer;
}

console.log(solution(91)); // 3

// 삼항 연산자, 이게 훨씬 간단함 

function solution2(angle2){
    return angle2 < 90 ? 1 : angle2 === 90 ? 2 : angle2 < 180 ? 3 : 4;
}

console.log(solution2(71)); // 1 