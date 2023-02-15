/*
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    let answer2;
    var answer = numbers.sort(function(a,b){
        return a - b;
    })    
    answer2 = answer[answer.length - 1] * answer[answer.length - 2];  
    return answer2;
}

console.log(solution([0, 31, 24, 10, 1, 9]));  // 744


// 초 간단식 

function solution(numbers) {
    numbers.sort((a,b)=>b-a);  // 역순으로 정리
    return numbers[0]*numbers[1];
}