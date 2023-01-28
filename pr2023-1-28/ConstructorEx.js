// 생성자 함수
function Cricle(radius){
    // this는 생성자 함수가 생성할 객체(인스턴스)를 가리킨다, 암묵적으로 생성된 객체
    // this에 바인딩된 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function (){
        return 2 * this.radius;
    };
    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
}


//인스턴스 생성
const Circle1 = new Cricle(5); //반지름 5인 객체 생성
const Circle2 = new Cricle(10); // 반지름 10인 객체 생성

console.log(Circle1.getDiameter());
console.log(Circle2.getDiameter());
console.log(Circle1);