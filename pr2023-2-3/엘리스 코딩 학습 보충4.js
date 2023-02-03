// 자바스크립트의 활용

// 주사위 게임

var dice = Math.floor(Math.random()* 6) + 1; // 0 ~ 1 사이의 임의수를 구하여 6을 곱하고 내림, 그리고 1을 더함
console.log(dice);

// 소수 구하기
// 소수 : 약수가 1과 자기 자신뿐인 자연수

function isPrime(n){
    var divisor = 2; // 2부터 나누기 시작
    while(n > divisor){  // n이 나누는 수보다 클 때 까지
        if (n % divisor === 0) {  // n과 나누는 수가 나누어 떨어지면 false 출력
            return false;
        } else {
            divisor++           // 나누어 떨어지지 않으면 1 증가
        }
    }
    return true;
}

console.log(isPrime(4));   // false
console.log(isPrime(7));   // true

// 문자열 거꾸로 출력하기 (for문 활용)

function reverse(str){
    var reverStr = "" // 빈 변수 생성
    for (var b = str.length - 1 ; b >= 0; b--){  // 변수 b는 문자열의 순서이기에 길이에서 1을 차감
        reverStr = reverStr + str.charAt(b);   // 빈 변수에 문자열의 역순대로 입력
    }
    return reverStr; // 최종본 저장
}

console.log(reverse("Hello"));