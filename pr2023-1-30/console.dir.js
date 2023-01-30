// 함수 객체 프로퍼티: arguments, caller, name, prototype

function square(number){
    return number * number;

}


console.log(Object.getOwnPropertyDescriptors(square));