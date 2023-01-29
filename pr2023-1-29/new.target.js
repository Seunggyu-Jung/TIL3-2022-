// new.target : new연산자 없이 호출된 생성자 함수를 가리킨다. 즉, undefined를 가리킴

function Circle(radius){

    if (!new.target){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}


// new연산자가 없어서 일반 함수 호출하지만, new.target으로 생성자 함수 호출
const circle1 = Circle(5);

console.log(circle1);

console.log(circle1.getDiameter());