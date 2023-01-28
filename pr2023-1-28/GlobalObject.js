// 전역 변수 : 전역에 생성된 변수의 수명은 전역이다.
var x = 'gloabal'

function foo(){
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x);