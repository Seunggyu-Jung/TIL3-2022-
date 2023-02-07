function soultion (num1, num2){
    var answer = Math.floor(num1 / num2);
    return answer;
}

console.log(soultion(7,2));


// Math.trunc( )= Math.floor( ) : 정수 부분 이외의 부분 버림

function soultion2 (num3, num4){
    var answer = Math.trunc(num3 / num4);
    return answer;
}

console.log(soultion2(5,2));