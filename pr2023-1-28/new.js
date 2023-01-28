// Object 생성자 함수: new 연산자와 함께 사용하여 빈 객체를 생성함

const person = new Object();  // person 객체를 인스턴스라고 부른다

person.name = 'Jung';
person.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
};

console.log(person);
person.sayHello();