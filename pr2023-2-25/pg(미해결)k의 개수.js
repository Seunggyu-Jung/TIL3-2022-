/*
정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
*/
// 숫자가 너무 커지면 답이 안나옴;;
function solution(i, j, k) {
    let Num = [];
    let answer = 0;
    for (let h = i; h <= j ; h++){
       Num.push(...h + "");
        answer = Num.filter((el) => (el) === (k + "")).length;
    }
    return answer;
}

console.log(solution(5, 80, 7)) // 18