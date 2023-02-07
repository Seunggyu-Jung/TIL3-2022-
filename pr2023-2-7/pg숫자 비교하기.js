function soultion (num1, num2){
    var answer;
    if (num1 != num2){
        answer = -1;
    } else {
        answer = 1;
    }


    return answer;
}

console.log(soultion(1,1));
console.log(soultion(1,2));


// 삼한 연산자(응용)

function soultion2(num3, num4){
    var answer = num3 === num4 ? 1 : - 1; // 변수 = 매개변수1 === 매개변수2 ? true : fasle;
    return answer;
}

console.log(soultion2(1, 2));
console.log(soultion2(1,1));