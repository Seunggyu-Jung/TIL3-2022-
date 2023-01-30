// arguments 프로퍼티의 값은 arguments 객체이다. 
// arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한(iterable) 유사 배열 객체이다.
// arguments 객체는 매개변수 개수를 확장할 수 없는 가변 인자 함수를 구현할 때 유용

function sum(){
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문을 순회할 수 있음
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));