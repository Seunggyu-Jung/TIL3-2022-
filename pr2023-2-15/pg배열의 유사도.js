/*
두 배열이 얼마나 유사한지 확인해보려고 합니다. 
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(s1, s2) {
    var answer = 0;
    for (let i = 0; i <= s1.length -1 ; i++){
        let Sam = s2.filter(x => x === s1[i]);
            answer += Sam.length;
    }
    return answer;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])) // 2


// 초 간단식 

function solution2(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));  // arr.include(매개변수) : 매개변수가 배열에 있는지 확인
    return intersection.length;
}

console.log(solution2(["n", "omg"], ["m", "dot"])) // 