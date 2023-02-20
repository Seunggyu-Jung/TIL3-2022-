/*
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array) {
    var answer = [];
    let NewArray = [];
    for (let i = 0 ; i <= array.length - 1; i++){
        NewArray.push({value : array[i], idx : i});    
    }
    
    NewArray.sort(function(a,b){
        return b.value -a.value;
    })
    answer.push(NewArray[0].value, NewArray[0].idx)
    return answer;
}

console.log(solution([9, 10, 11, 8]))  // [ 11, 2 ]

// 초 간단식 indexOf(a): a의 인덱스를 찾아줌
function solution2(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}

console.log(solution2([7,8,97,5,58])) // [ 97, 2 ]