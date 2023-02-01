// 객체 리터럴을 평가하여 객체를 생성할 때, 추상 연산을 호출
// 이때, 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입이 Object.portotype
// 따라서, 객체 리터럴에 의해 생성된 객체의 프로토타입 = Object.portotype


// 객체 리터럴에 의해 생성된 객체 
const obj = { x : 1 };

// Object.portotype을 상속받음
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));