// 10부터 0까지 출력
function countdown(n){
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀호출
}

countdown(10);


// 팩토리얼 재귀함수 구현
function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1); // 재귀호출
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));