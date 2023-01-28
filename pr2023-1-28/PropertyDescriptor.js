// 프로퍼티 디스크립터: 프로퍼티 상태를 간접적으로 확인 할 수 있음

const person = {
    name : 'lee'
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));