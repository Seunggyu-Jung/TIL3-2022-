//name프로퍼티는 함수의 이름을 나타냄

// 기명 함수 표현식
var namedFunc = function maple(){

};

console.log(namedFunc.name);


// 익명 함수 표현식 : 함수 객체를 가리키는 변수 이름(식별자)으로 값을 갖는다

var anomymousFunc = function (){};

console.log(anomymousFunc.name);

// 함수 선언문

function story(){}

console.log(story.name);