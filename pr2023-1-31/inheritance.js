// 상속 : 어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 그대로 사용할 수 있은 것 -> 중복을 제거하고 기존의 코드를 적극 재사용


// prototype 으로 상속받지 않은 생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);

console.log(circle1.getArea === circle2.getArea); //false
console.log(circle1.getArea());
console.log(circle2.getArea());


// prototype으로 상속받은 생성자 함수

function Circle(radius){
    this.radius = radius;

    // 프로토타입은 생성자 함수의 prototype 프로피터에 바인딩되어 있음
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

const circle3 = new Circle(2);
const circle4 = new Circle(3);

console.log(circle3.getArea === circle4.getArea); // true , 생성자 함수가 생성하는 모든 객체는 하나의(getArea) 메서드를 공유한다
console.log(circle3.getArea());
console.log(circle4.getArea());