/*
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/
// 오버플로우가 생길수 있기때문에 최대한 간단한 식으로 계산 해야함
function solution(balls, share) {
    var answer;
    let Za = 1;
    let Mo2 = 1;
    for(let i = balls; i >= balls - share + 1 ; i--){
             Za *= i;
    }
    for (let h = share; h >= 1 ; h--){
        Mo2 *= h;
    }
    answer = Math.floor(Za / Mo2);
    return answer;
}

console.log(solution(5, 3)) //  10
console.log(solution(30, 29)) //  30