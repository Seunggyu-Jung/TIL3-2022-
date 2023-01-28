var x = 'global';

function foo(){
    console.log(x);  // x는 이미 undefined로 할당됨
    var x = 'local'; //이후 무시
}

foo();
console.log(x);


