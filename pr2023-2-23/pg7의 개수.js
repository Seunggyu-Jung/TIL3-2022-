/*
정수 배열 array가 매개변수로 주어질 때, 
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array) {
    var answer = [...(array+ "")].filter((el) =>(el) == 7).length; 
    return answer;
}


console.log(solution([7, 77, 17]))  // 4
console.log(solution([10, 29]))  //   0