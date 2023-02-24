/*
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(array, n) {
    var answer;
       let Cha = array.sort(function(a,b){  // array가 순서대로 안나올수 있기때문에 오름차순으로 먼저 정렬함
            return a - b  
        }).map((el) => Math.abs((el) - n));
        answer = array[Cha.indexOf(Math.min(...Cha))];
    return answer;
}

console.log(solution([3, 10, 28], 5)) // 3
console.log(solution([3, 3, 1], 2)) //  1