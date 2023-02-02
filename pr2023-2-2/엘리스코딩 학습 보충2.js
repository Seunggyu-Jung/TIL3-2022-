// 자바스크립트의 프로퍼티와 메서드
// 프로퍼티는 객체명, 메서드는 객체의 동작을 의미


// 문자열 프로퍼티와 메서드
var str1 = "Hello World";
str1.length; // 문자열의 길이를 나타내는 메서드 : 11
str1.charAt[0]; // 문자열의 []번째 데이터 추출 : H
str1.split(" "); // 공백 기준으로 문자열을 나눠 출력 : [Hello , World]

// 배열 프로퍼티와 메서드
var fruit = ["사과", "배", "포도"];
fruit.length; // 배열의 객체 개수를 출력

fruit.push("딸기"); // 배열의 맨 뒤에 새로운 데이터 삽입

fruit.unshift("레몬"); // 배열의 맨 앞에 새로운 데이터 삽입

fruit.pop; // 배열의 맨 뒤의 데이터 삭제
fruit.shift; // 배열의 맨 앞의 데이터 삭제

// Math의 수학 연산 메서드

Math.abs(-3); // 절대값 : 3
Math.ceil(0.3); // 올림 : 1
Math.floor(10.9); // 내림 : 10
Math.random(); // 임의의 수 출력 (0 ~ 999)

// 문자를 숫자로 변환하는 메서드

var col1 = "20.06";
parseInt(col1); // 문자를 정수로 출력 : 20
parseFloat(col1); // 문자를 실수로 출력 : 20.06


