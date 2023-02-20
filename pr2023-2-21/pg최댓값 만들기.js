/*
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    let cons;
    var answer = numbers.sort(function(a,b){
        return b - a
    });
    for (let i = 0 ; i <= answer.length -1 ; i++){
        if (answer[0] * answer[1] > answer[answer.length -1] * answer[answer.length -2]){
        cons = answer[0] * answer[1];
    } else {
        cons =  answer[answer.length -1] * answer[answer.length -2]
    }
    }
    return cons;
}

console.log(solution([1, 2, -3, 4, -5])) // 15

// 초 간단식 : Math.max(a,b) 최댓값을 구함

function solution2(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
} 

console.log(solution2([1,5,7,-8,-9])) //  72