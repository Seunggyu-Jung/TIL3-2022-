/*
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/

function solution(strlist) {
    var answer = [];
    for (var i = 0; i <= strlist.length - 1; i++){
        answer.push(strlist[i].length);
    }
    return answer;
}

console.log(solution(["We", "are", "the", "world!"])); // [ 2, 3, 3, 6 ] 

// 초 간단식

function solution2(strlist2) {
    return strlist2.map(x => x.length)
}

console.log(solution2(["I", "Love", "Programmers."]	)); // [ 1, 4, 12 ]  , map 메서드로 배열 인자에 변화 부여