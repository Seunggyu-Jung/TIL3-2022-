/*
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, direction) {
    var answer = [];
    if (direction == "right"){
        answer.push(numbers[numbers.length - 1])
        for (let i = 0; i < numbers.length - 1; i++){
            answer.push(numbers[i])
        }
    } else {
        for (let i = 1; i <= numbers.length - 1; i++){
            answer.push(numbers[i])
        }
        answer.push(numbers[0])
    }
    return answer;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], "right")) // [6,  4, 455, 6, 4, -1,  45]

// 초 간단식 ...numbers를 통한 전개구문과 .slice를 통한 범위 지정을 응용 , slice(0 , 7) 에서 뒤의 숫자 전까지 가져온다.

function solution2(numbers, direction) {
    return direction === "right"
      ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
      : [...numbers.slice(1), numbers[0]];
  }

  console.log(solution2([1, 2, 3], "left")) // [ 2, 3, 1 ]
  