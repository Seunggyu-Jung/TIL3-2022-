// 프로토타입 객체 : 객체 간 상속을 구현하기 위해 사용
// 객체와 프로토타입과 생성자 함수는 서로 연결되어 있음

const obj = {};
const parent = { x: 1};

// getPrototypeOf : obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj); // obj.__proto__;

// setPrototypeOf : obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);

console.log(obj.x);