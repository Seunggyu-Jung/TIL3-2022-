// 스코프 : 식별자가 유효한 범위

var x = 'global';  //전역 스코프(상위)
function foo(){
    var x = 'local';  //지역 스코프(하위)
    console.log(x);
}

foo();

console.log(x);