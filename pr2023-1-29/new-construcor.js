// new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다.

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// new연산자 없이 생성자 함수 호출
const circle = Circle(5);

// undefined 출력
console.log(circle);

