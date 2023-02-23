/*
정수 num과 k가 매개변수로 주어질 때, 
num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num, k) {
    let Num = (num + "");
    let answer;
    if ( [...Num].findIndex(x => x == k) != -1){   // array.findIndex((el) => (el) === n) : n이 몇번째 인덱스에 있는지 찾는 메서드 
        answer = [...Num].findIndex(x => x == k) + 1
    } else {
        answer = [...Num].findIndex(x => x == k)
    }
    return answer;
}

console.log(solution(4854121,5))  //  3