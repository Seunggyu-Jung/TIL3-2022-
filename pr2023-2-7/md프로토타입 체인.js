function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function (){
    console.log(`Hi! My name is $[this.name]`);
};

const me = new Person("Jung");

console.log(me.hasOwnProperty("name")); // hasOwnProperty는 Object.prototype의 메서드

// Person 생성자 함수에서 부터 생성된 객체 me는 Object.prototype과 Person.prototype 둘 다 상속받음
// 프로토타입 체인 : 객체의 프로퍼티에 접근하려 할 때 해당 객체에 접근하려는 프로퍼티가 없다면, [[prototype]] 내부 슬록 참조를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색