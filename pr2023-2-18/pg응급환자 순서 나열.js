/*
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(emergency) {
    let answer = new Array(emergency.length);
    let NewEmergency = [];
    for (let i = 0; i < emergency.length ; i++){
        NewEmergency.push({value: emergency[i] , idx: i});   // 기존 순서를 객체로 정리하는 방법, value와 idx를 사용
    }
    NewEmergency.sort(function(a,b){
        return b.value - a.value;
    })
    
    let j = 0;
    while(j < NewEmergency.length){
        let item = NewEmergency[j];
        answer[item.idx] = j + 1;
        j = j + 1;
    }
    return answer;
}

console.log(solution([30, 10, 23, 6, 100])) // [ 2, 4, 3, 5, 1 ]