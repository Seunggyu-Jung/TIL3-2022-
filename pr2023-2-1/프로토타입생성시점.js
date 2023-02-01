// 생성자 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입 더불어 생성
// 객체를 생성하면 프로토타입은 생성된 객체의 [[prototype]] 내부 슬롯에 할당
// 이때, 생성된 프로토타입은 Object.prototype 이다

// 함수 호이스팅으로 뒤에 생성된 함수가 먼저 실행
console.log(Person.prototype);

function Person(name){
    this.name = name;
}
