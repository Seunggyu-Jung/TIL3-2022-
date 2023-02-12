/*
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num_list) {
    var answer = [];
    let OddNum = 0;
    let EvenNum = 0;
    for(var i = 0; i <= num_list.length - 1; i++){
        if(num_list[i] % 2 === 0){
            EvenNum += 1;
        } else {
            OddNum += 1;
        }
    }
    answer.push(EvenNum);
    answer.push(OddNum);
    return answer;
}


console.log(solution([1, 2, 3, 4, 5]));  // [ 2, 3 ]
console.log(solution([1, 3, 5, 7]));  //  [ 0, 4 ]


// 초 간편식

function solution2(num2_list) {
    var answer2 = [0,0];

    for(let a of num2_list){
        answer2[a%2] += 1
    }

    return answer2;
}