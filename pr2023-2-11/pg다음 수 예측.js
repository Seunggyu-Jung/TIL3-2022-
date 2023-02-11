/*
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(common) {
    var answer = 0;
    let lastNum = common[common.length - 1];
    let biNum = lastNum - common[common.length - 2];
    
    if (common[0] + biNum != common[1]){
        answer = lastNum * (common[1] / common[0]);
    } else {
        answer = lastNum + biNum;
    }
    return answer;
}

console.log(solution([1,2,3,4,5]))// 6
console.log(solution([3,6,9,12])) // 15