// 변수 기초
var fruit; // 변수 선언

fruit = "Apple"; // 변수 초기화

var fruit = "Apple"; // 변수 선언 및 초기화

console.log(fruit); // 변수의 데이터 확인

// 함수 기초

var Func1 = function(){
    console.log("Func1");  
}  // 변수를 이용하여 함수 생성

Func1(); // 함수 호출


function Func2(){
    console.log("Func2"); 
}  // 변수없이 함수 생성

Func2(); // 함수 호출

// 함수 예제 

var area = function(width, height){
    return width * height; // return : 함수 안에 데이터를 저장할때 사용 
}

area(10, 20); // 인자 : 함수에게 전달하는 데이터

console.log(area(10,20));


