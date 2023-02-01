// 사용자 정의 생성자 함수에 의해 생성된 객체의 프로토타입 = 생성자 함수의 prototype프로퍼티에 바인딩되어 있는 객체

// 생성자 함수
function Person(name){
    this.name = name;

}

// 프로토타입 메서드(생성자 함수의 프로토타입으로 바인딩)
// Person.prototype의 프로퍼티는 constructor뿐
Person.prototype.sayHallo = function (){
    console.log(`Hi, My name is ${this.name}`);
};

const me = new Person('Jung');
const you = new Person('Lee');

me.sayHallo();
you.sayHallo();