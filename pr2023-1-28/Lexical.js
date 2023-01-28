// 렉시컬 스코프 : 정적 스코프, 함수가 정의되는 곳에 따라 상위 스코프가 결정
var x = 1;

// bar 함수를 참조
function foo(){
    var x = 10;
    bar();
}

// bar 함수는 전역에서 정의된 함수
function bar(){
    console.log(x);
}

foo();

bar();