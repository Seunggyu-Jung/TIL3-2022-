// __proto__접근자 프로퍼티는 [[prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티(간접적으로)

const obj = { a:1 };


// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다
console.log(obj.__proto__ === Object.prototype);

// hasOwnProperty 메서드는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true 반환,  
// 상속받은 프로토타입의 프로퍼티 키인 경우 false 반환

console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));