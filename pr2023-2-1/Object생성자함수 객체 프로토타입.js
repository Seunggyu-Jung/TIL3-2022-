// Object생성자함수에 의해 생성된 객체의 프로토타입도 Object.portotype을 프로토타입으로 갖고, 상속받는다.

const obj = new Object();
obj.x = 1;

console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));