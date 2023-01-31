// 객체지향 프로그래밍: 객체의 집합으로 프로그램을 표현하는 프로그래밍의 패러다임

// 프로퍼티 : 객체의 상태 데이터 , 메소드 : 동작

const circle = {
    radius : 5,

    getDiameter() {
        return 2 * this.radius;
    },

    getPerimeter(){
        return 2 * Math.PI * this.radius;
    },

    getArea(){
        return Math.PI * this.radius ** 2;
    }
};


console.log(circle);
console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());