// 홀수 찾기

function soulution(n){
    let answer = [];
    for (var i = 1; i <= n; i += 2){ // 증감식을 += 로 사용할 수 있음
        answer.push(i);
    }

    return answer;
}

console.log(soulution(10));

// 짝수 찾기

function soulution2(n2){
    let answer2 = [];
    for (var i2 = 2; i2 <= n2; i2 += 2){ // 증감식을 += 로 사용할 수 있음
        answer2.push(i2);
    }

    return answer2;
}

console.log(soulution2(10));